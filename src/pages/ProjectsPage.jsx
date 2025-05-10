import { motion } from 'framer-motion'
import Projects from '../components/Projects'

const ProjectsPage = () => {
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
          <h1>My Projects</h1>
          <p>Explore my featured projects and technical skills</p>
        </div>
      </div>
      <Projects />
    </motion.div>
  )
}

export default ProjectsPage