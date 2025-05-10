import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

// Create axios instance with base URL
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Contact form submission
export const sendContactMessage = async (messageData) => {
  try {
    const response = await apiClient.post('/contact', messageData)
    return response.data
  } catch (error) {
    console.error('Error sending contact message:', error)
    throw new Error(error.response?.data?.message || 'Failed to send message')
  }
}

// Add more API calls as needed
export const getProjects = async () => {
  try {
    const response = await apiClient.get('/projects')
    return response.data
  } catch (error) {
    console.error('Error fetching projects:', error)
    throw new Error(error.response?.data?.message || 'Failed to fetch projects')
  }
}