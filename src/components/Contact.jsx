import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { sendContactMessage } from '../services/apiService'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: null
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setFormStatus({
      submitting: true,
      submitted: false,
      success: false,
      error: null
    })
    
    try {
      const response = await sendContactMessage(formData)
      
      setFormStatus({
        submitting: false,
        submitted: true,
        success: true,
        error: null
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: error.message || 'Something went wrong. Please try again.'
      })
    }
  }
  
  const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    info: 'karthikchitti55@gmail.com',
    link: 'mailto:karthikchitti55@gmail.com'
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    info: '+91 8688277183', // Replace with your real number
    link: 'tel:+918688277183' // Format for tel: link
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    info: 'Hyderabad, India', // Replace or keep based on your actual location
    link: null
  }
];


  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any inquiries or opportunities. I'll get back to you as soon as possible.</p>
            
            <div className="info-items">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={item.title} 
                  className="info-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h4>{item.title}</h4>
                    {item.link ? (
                      <a href={item.link}>{item.info}</a>
                    ) : (
                      <p>{item.info}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Send Message</h3>
            
            {formStatus.submitted && formStatus.success && (
              <div className="form-success">
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
            )}
            
            {formStatus.submitted && !formStatus.success && (
              <div className="form-error">
                <p>{formStatus.error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Karthik Chitti"
                  
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="karthikchitti55@gmail.com"
                  
                />
              </div>
              </div>

              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows="5"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Sending...' : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact