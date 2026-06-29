// End-to-end smoke test: spins up an in-memory MongoDB, starts the real
// server pointed at it, then exercises the Contact endpoint.
import { spawn } from 'node:child_process'
import { MongoMemoryServer } from 'mongodb-memory-server'

const PORT = 5099
const base = `http://localhost:${PORT}/api`
let mongo, child

async function waitForHealth(retries = 40) {
  for (let i = 0; i < retries; i++) {
    try {
      const r = await fetch(`${base}/health`)
      if (r.ok) return
    } catch (_) {}
    await new Promise((res) => setTimeout(res, 250))
  }
  throw new Error('Server did not become healthy in time')
}

function assert(cond, msg) {
  if (!cond) throw new Error('FAIL: ' + msg)
  console.log('  ✓ ' + msg)
}

try {
  mongo = await MongoMemoryServer.create()
  const uri = mongo.getUri()
  console.log('• in-memory MongoDB at', uri)

  child = spawn('node', ['server.js'], {
    cwd: new URL('..', import.meta.url).pathname,
    env: { ...process.env, PORT: String(PORT), MONGO_URI: uri, CLIENT_ORIGIN: '*' },
    stdio: 'inherit',
  })

  await waitForHealth()
  console.log('• server healthy, running checks:')

  let r = await fetch(`${base}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Ada', email: 'ada@x.com', subject: 'Hi', message: 'Hello there' }),
  })
  let j = await r.json()
  assert(r.status === 201 && j.ok && j.id, 'POST /contact saves a message')

  r = await fetch(`${base}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'NoEmail' }),
  })
  assert(r.status === 400, 'POST /contact rejects missing fields')

  r = await fetch(`${base}/nope`)
  assert(r.status === 404, 'unknown /api route returns 404')

  console.log('\n✅ All API checks passed')
  process.exitCode = 0
} catch (err) {
  console.error('\n❌', err.message)
  process.exitCode = 1
} finally {
  if (child) child.kill()
  if (mongo) await mongo.stop()
}
