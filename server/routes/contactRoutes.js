import express from 'express'
import { createContact, getContacts } from '../controllers/contactController.js'

const router = express.Router()

// POST /api/contact - Create a new contact message
router.post('/', createContact)

// GET /api/contact - Get all contact messages (protected in a real app)
router.get('/', getContacts)

export default router