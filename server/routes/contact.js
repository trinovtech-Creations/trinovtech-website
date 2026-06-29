import { Router } from 'express'
import Contact from '../models/Contact.js'

const router = Router()

// POST /api/contact — save a contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ ok: false, error: 'All fields are required.' })
    }
    const doc = await Contact.create({ name, email, subject, message })
    res.status(201).json({ ok: true, id: doc._id })
  } catch (err) {
    res.status(500).json({ ok: false, error: 'Could not save message.' })
  }
})

// GET /api/contact — list messages (for an admin view)
router.get('/', async (_req, res) => {
  const items = await Contact.find().sort({ createdAt: -1 }).limit(100)
  res.json({ ok: true, items })
})

export default router
