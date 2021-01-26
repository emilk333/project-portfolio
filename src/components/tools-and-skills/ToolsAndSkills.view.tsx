import React from 'react'
import ToolsAndSkillSVGGenerator from './ToolsAndSkillSVGGenerator.config'
import { IToolsAndSkill } from './ToolsAndSkillInterface'
import { motion } from 'framer-motion'

const ToolsAndSkills = ( prop:IToolsAndSkill ) => {
    const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.3}
    return (
        <motion.article initial={{bottom:'-10rem', opacity:0}} animate={{top:'0', opacity:1}} exit={{bottom:'-10rem', opacity:0}} transition={transition} className="pf-tools-and-skills">
            <h2 className="pf-tools-and-skills__title">{prop.title}</h2>
            <ul className="pf-tools-and-skills__list-container">
                {prop.content.map((item, index) => {
                    return (
                        <li key={index} className="pf-tools-and-skills__list-item">
                            <div>
                                <ToolsAndSkillSVGGenerator svg={item.svg}/>
                            </div>
                            <p className="pf-tools-and-skills__list-item-text">{item.name}</p>
                        </li>
                    )
                })}
            </ul>
        </motion.article>
    )
}

export default ToolsAndSkills