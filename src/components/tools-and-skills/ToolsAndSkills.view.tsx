import React from 'react'
import ToolsAndSkillSVGGenerator from './ToolsAndSkillSVGGenerator.config'

const ToolsAndSkills = ({props}:any) => {
    return (
        <article className="pf-tools-and-skills">
            <h2 className="pf-tools-and-skills__title">{props.title}</h2>
            <ul className="pf-tools-and-skills__list-container">
                {props.content.map((item:any, index:any) => {
                    return (
                        <li key={index} className="pf-tools-and-skills__list-item">
                            <div>
                                <ToolsAndSkillSVGGenerator svg={item.svg}/>
                            </div>
                            <p>{item.name}</p>
                        </li>
                    )
                })}
            </ul>
        </article>
    )
}

export default ToolsAndSkills