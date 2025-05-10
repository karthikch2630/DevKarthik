import Contact from '../models/Contact.js'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

// Create a contact message
export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' })
    }
    
    // Create new contact entry
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    })
    
    // Save to database
    const savedContact = await newContact.save()
    
    // Send email notification
    await sendEmailNotification(savedContact)
    
    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      contact: savedContact
    })
  } catch (error) {
    console.error('Contact creation error:', error)
    res.status(500).json({ message: 'Failed to send message', error: error.message })
  }
}

// Get all contact messages
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.status(200).json(contacts)
  } catch (error) {
    console.error('Error fetching contacts:', error)
    res.status(500).json({ message: 'Failed to fetch contacts', error: error.message })
  }
}

// Send email notification
const sendEmailNotification = async (contact) => {
  // Check if email credentials are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('Email credentials not set. Skipping email notification.')
    return
  }
  
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
    
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Contact Form Submission: ${contact.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message}</p>
        <p><strong>Sent at:</strong> ${contact.createdAt}</p>
      `
    }
    
    // Send email
    await transporter.sendMail(mailOptions)
    console.log('Email notification sent successfully')
  } catch (error) {
    console.error('Failed to send email notification:', error)
    // We don't throw here to prevent the API from failing if email fails
  }
}