import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoutes from './routes/contactRoutes.js'

// Load environment variables
dotenv.config()

// Create Express app
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/contact', contactRoutes)

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  })
})

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection error:', error.message)
    process.exit(1)
  }
}

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, async () => {
  await connectDB()
  console.log(`Server running on port ${PORT}`)
})