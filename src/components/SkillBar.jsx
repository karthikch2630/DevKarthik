import { motion } from 'framer-motion'
import './SkillBar.css'

const SkillBar = ({ skill }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-progress">
        <motion.div 
          className="skill-progress-bar"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  )
}

export default SkillBar