// src/pages/CertificationsPage.jsx
import { motion } from 'framer-motion'
import Certifications from '../components/Certifications'

const CertificationsPage = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  }
  
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-content"
    >
      <div className="page-header">
        <div className="container">
          <h1>My Certifications</h1>
          <p>Professional certifications and courses I've completed</p>
        </div>
      </div>
      <Certifications />
    </motion.div>
  )
}

export default CertificationsPage
