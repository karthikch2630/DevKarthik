import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = (e) => {
    e.preventDefault()
    const projectsSection = document.getElementById('projects')
    projectsSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hero-text">
            <h1 className="hero-name">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Hello, I'm <span className="highlight">Karthik</span>
              </motion.span>
            </h1>
            
            <motion.h2 
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I build modern web applications with clean code and beautiful interfaces.
              Specializing in the MERN stack with a focus on performance and user experience.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a href="#contact" className="btn btn-primary" onClick={scrollToContact}>
                Hire Me <FaArrowRight className="btn-icon" />
              </a>
              <a href="#projects" className="btn btn-secondary" onClick={scrollToProjects}>
                View My Work
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="img-container">
              <img 
                src="https://res.cloudinary.com/diqux3y0a/image/upload/w_1000,h_1000,c_fill,g_center/v1746810644/profile_s005sg.jpg" 
                alt="Karthik - Developer" 
              />
              <div className="img-outline"></div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span>Scroll Down</span>
          <span className="scroll-arrow"></span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero