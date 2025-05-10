import { motion } from 'framer-motion'
import { FaDownload, FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import './Resume.css'
import { education, experience } from '../data/resumeData'

const Resume = () => {
  const handleDownload = () => {
    // Opens the PDF in a new tab for download/view
    window.open('https://drive.google.com/uc?export=download&id=1dSLSiT7wKd8aLDpHcjQuFLeMaJZzbWqh', '_blank')
  }

  return (
    <section id="resume" className="resume">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Resume
        </motion.h2>

        <div className="resume-header">
          <motion.p 
            className="resume-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Here's a summary of my education and professional experience. Download my full resume for more details.
          </motion.p>

          <motion.button 
            onClick={handleDownload}
            className="download-btn"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(10, 102, 194, 0.2)" }}
          >
            <FaDownload /> Download Resume
          </motion.button>
        </div>

        <div className="timeline-container">
          <div className="timeline-section">
            <div className="timeline-heading">
              <motion.div 
                className="timeline-icon education"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FaGraduationCap />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Education
              </motion.h3>
            </div>

            <div className="timeline">
              {education.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  <span className="timeline-date">{item.period}</span>
                  <div className="timeline-content">
                    <h4>{item.degree}</h4>
                    <h5>{item.institution}</h5>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="timeline-section">
            <div className="timeline-heading">
              <motion.div 
                className="timeline-icon work"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <FaBriefcase />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Work Experience
              </motion.h3>
            </div>

            <div className="timeline">
              {experience.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  <span className="timeline-date">{item.period}</span>
                  <div className="timeline-content">
                    <h4>{item.position}</h4>
                    <h5>{item.company}</h5>
                    <p>{item.description}</p>
                    <ul className="responsibility-list">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
