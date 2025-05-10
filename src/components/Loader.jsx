import { motion } from 'framer-motion'
import './Loader.css'

const Loader = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
  }
  
  const dotVariants = {
    initial: { y: 0 },
    animate: { 
      y: [-15, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }
  
  return (
    <div className="loader-container">
      <motion.div 
        className="loader"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="logo-loader">
          <span>Dev<span className="highlight">Karthik</span></span>
        </motion.div>
        <motion.div className="dots-container">
          {[0, 1, 2].map(index => (
            <motion.div 
              key={index}
              className="dot"
              variants={dotVariants}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                backgroundColor: 'var(--primary-500)'
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Loader