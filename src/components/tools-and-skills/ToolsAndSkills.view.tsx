import React from 'react'
import ToolsAndSkillSVGGenerator from './ToolsAndSkillSVGGenerator.config'
import IToolsAndSkill from './ToolsAndSkillInterface'

const ToolsAndSkills = ( prop:IToolsAndSkill ) => {
    return (
        <article className="pf-tools-and-skills">
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
        </article>
    )
}

export default ToolsAndSkills