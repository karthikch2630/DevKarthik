import { motion } from 'framer-motion'
import Contact from '../components/Contact'

const ContactPage = () => {
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
          <h1>Contact Me</h1>
          <p>Let's connect and discuss your project</p>
        </div>
      </div>
      <Contact />
    </motion.div>
  )
}

export default ContactPage