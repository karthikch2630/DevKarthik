import { FaGithub, FaLinkedin, } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/karthikch2630', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/karthikch2630/', label: 'LinkedIn' },
    
  ];
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <span className="footer-logo-text">Dev<span className="highlight">Karthik</span></span>
            <p className="footer-tagline">Full Stack Developer specializing in modern web applications</p>
          </div>
          
          <div className="footer-social">
            <h3 className="footer-heading">Connect</h3>
            <ul className="social-links">
              {socialLinks.map((link, index) => (
                <motion.li 
                  key={link.label}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Karthik Chitti | Full Stack & AI Developer. All rights reserved.
          </p>
          <p className="footer-note">
            Built with React + Vite
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer