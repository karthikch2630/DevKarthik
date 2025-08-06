import { motion } from 'framer-motion'
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaShieldAlt, FaTools } from 'react-icons/fa';

import SkillBar from './SkillBar'
import './About.css'

const About = () => {
  const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Express.js', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'TypeScript', level: 60},
  { name: 'HTML/CSS', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'SQL', level: 70 },
 
  { name: 'Git/GitHub', level: 85 },
  { name: 'Postman (API Testing)', level: 80 },
  { name: 'REST APIs', level: 85 },
  { name: 'JWT Authentication', level: 80 }
];

  
  const services = [
  {
    icon: <FaCode />,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces using React.js, HTML, CSS, and Tailwind CSS.'
  },
  {
    icon: <FaServer />,
    title: 'Backend Development',
    description: 'Developing robust and scalable backend systems using Node.js, Express.js, and MongoDB.'
  },
  {
    icon: <FaMobileAlt />,
    title: 'AI/ML Integration',
    description: 'Creating intelligent applications using Python, AI/ML models, and Streamlit for real-time predictions.'
  },
  {
    icon: <FaDatabase />,
    title: 'Database Design',
    description: 'Designing and managing efficient databases with MongoDB and SQL for secure data storage.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Authentication & Security',
    description: 'Implementing secure authentication systems using JWT and protecting APIs from unauthorized access.'
  },
  {
    icon: <FaTools />,
    title: 'API Development & Testing',
    description: 'Designing RESTful APIs and testing with Postman for smooth client-server communication.'
  }
];


  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm a passionate <strong>Full Stack Developer</strong> with
              expertise in{" "}
              <strong>
                JavaScript, Python, React.js, Node.js, and MongoDB
              </strong>
              . Over the years, I’ve designed, developed, and mentored projects
              ranging from <strong>AI-powered applications</strong> to{" "}
              <strong>real-time tracking systems</strong>. What began as a
              curiosity about how technology powers the digital world has grown
              into a career focused on building{" "}
              <strong>
                intelligent, scalable, and user-friendly web applications
              </strong>
              .
            </p>

            <p>
              I primarily specialize in the <strong>MERN stack</strong>{" "}
              (MongoDB, Express.js, React, and Node.js), but I’m constantly
              exploring new tools and technologies to stay ahead in this
              fast-evolving field. I'm committed to writing{" "}
              <strong>clean, maintainable code</strong> and crafting{" "}
              <strong>intuitive user experiences</strong> that make a meaningful
              impact.
            </p>

            <p>
              When I’m not coding, you’ll likely find me{" "}
              <strong>hiking in the mountains</strong>,{" "}
              <strong>reading science fiction</strong>, or{" "}
              <strong>experimenting with new recipes</strong> in the kitchen.
            </p>
          </motion.div>

          <motion.div
            className="skills-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <SkillBar skill={skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="services-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Services I Offer</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About