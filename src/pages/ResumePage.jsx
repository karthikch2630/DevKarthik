import { motion } from 'framer-motion'
import Resume from '../components/Resume'

const ResumePage = () => {
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
          <h1>My Resume</h1>
          <p>My education and professional experience</p>
        </div>
      </div>
      <Resume />
    </motion.div>
  )
}

export default ResumePage