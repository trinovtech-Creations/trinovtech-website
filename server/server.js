import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import contactRoutes from './routes/contact.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5050
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/trinovtech'
// CLIENT_ORIGIN may be a comma-separated list, e.g.
// "https://trinovtech.in,https://www.trinovtech.in"
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173'
const allowedOrigins = CLIENT_ORIGIN.split(',').map((o) => o.trim()).filter(Boolean)

app.use(
  cors({
    origin: (origin, cb) => {
      // allow non-browser tools (no Origin header) and any whitelisted origin
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true)
      cb(new Error('Not allowed by CORS'))
    },
  })
)
app.use(express.json())

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'trinovtech-api' }))
app.use('/api/contact', contactRoutes)

// 404 for unknown API routes
app.use('/api', (_req, res) => res.status(404).json({ ok: false, error: 'Route not found.' }))

connectDB(MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`✓ API running on http://localhost:${PORT}`))
})
