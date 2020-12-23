import React from 'react'
import ArrowSVG from '../../foundation/javascript/svg/arrow-svg'
import LinkedinSVG from '../../foundation/javascript/svg/linkedin-svg'
import LocationSVG from '../../foundation/javascript/svg/location-svg'
import MailSVG from '../../foundation/javascript/svg/mail-svg'
import ToolsAndSkills from '../../components/tools-and-skills/ToolsAndSkills.view'
import { IToolsAndSkill } from '../../components/tools-and-skills/ToolsAndSkillInterface'


const About = () => {

    const linkConfig = [
        {
            value : "Copenhagen"
        },
        {
            value : "emilkristoffersen93@gmail.com"
        },
        {
            value : "Linkedin profile",
            url : "https://www.linkedin.com/in/emil-kristoffersen-95a890b8/"
        }
    ]

    const toolsAndSkillsConfig = [
        {
            title: "Ui tools",
            content : [
                {
                    svg: "adobeXD",
                    name: "Adobe experience design"
                },
                {
                    svg: "adobePS",
                    name: "Adobe Photoshop"
                },
                {
                    svg: "zeplin",
                    name: "Zeplin"
                }
            ]
        },
        {
            title: "Technology",
            content : [
                {
                    svg: "react",
                    name: "React bro"
                },
                {
                    svg: "vue",
                    name: "Vue"
                },
                {
                    svg: "sass",
                    name: "SCSS (BEM)"
                },
                {
                    svg: "webpack",
                    name: "Webpack"
                },
                {
                    svg: "javascript",
                    name: "Javascript (+ES6)"
                }
            ]
        },
        {
            title: "Design methods",
            content : [
                {
                    svg: "designThinking",
                    name: "Design thinking..."
                }
            ]
        }
    ]

    const renderlinkSection = () => {
        return (
            <ul className="pf-about__links">
                    <li className="pf-about__link-item">
                        <div className="pf-about__icon">
                            <LocationSVG />
                        </div>
                        {linkConfig[0].value}
                    </li>
                    <li className="pf-about__link-item">
                        <a href={`mailto:${linkConfig[1].value}`} target="_blank">
                            <div className="pf-about__icon">
                                <MailSVG />
                            </div>
                            {linkConfig[1].value}
                        </a>
                    </li>
                    <li className="pf-about__link-item">
                        <a href={linkConfig[2].url} target="_blank">
                            <div className="pf-about__icon">
                                <LinkedinSVG />
                            </div>
                            {linkConfig[2].value}
                        </a>
                    </li>
                </ul>
        )
    }

    return (
        <div className="pf-about">
            <section className="pf-about__wrapper">
                <div className="pf-about__arrow">
                    <ArrowSVG />
                </div>
                <div className="pf-shapes__dot pf-about__dot-1"></div>
                    {renderlinkSection()}
                <div className="pf-shapes__line pf-shapes__line--large-space"></div>
                <section>
                    <h1 className="pf-about__title">More about me</h1>
                    <p className="pf-about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.</p>
                </section>
            </section>
            <div className="pf-shapes__line pf-shapes__line--small-space"></div>
            <section className="pf-about__wrapper">
                <div className="pf-tools-and-skills__wrapper">
                    {toolsAndSkillsConfig.map((item:IToolsAndSkill, index) => <ToolsAndSkills key={index} title={item.title} content={item.content}/> )}
                </div>
            </section>
        </div>
    )
}

export default About