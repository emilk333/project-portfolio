import React from 'react'
import ArrowSVG from '../../foundation/javascript/svg/arrow-svg'
import LinkedinSVG from '../../foundation/javascript/svg/linkedin-svg'
import LocationSVG from '../../foundation/javascript/svg/location-svg'
import MailSVG from '../../foundation/javascript/svg/mail-svg'
import ToolsAndSkills from '../../components/tools-and-skills/ToolsAndSkills.view'

const About = () => {
    const toolsAndSkillsConfig = [
        {
            title: "Ui tools",
            content : [
                {
                    svg: "adobeXD",
                    name: "Adobe experience design"
                },
                {
                    svg: "adobePhotoshop",
                    name: "Adobe Photoshop"
                }
            ]
        },
        {
            title: "Technology",
            content : [
                {
                    svg: "react",
                    name: "React bro"
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
    return (
        <div className="pf-about">
            <section className="pf-about__wrapper">
                <div className="pf-about__arrow">
                    <ArrowSVG />
                </div>
                <div className="pf-shapes__dot pf-about__dot-1"></div>
                <ul className="pf-about__links">
                    <li className="pf-about__link-item">
                        <div className="pf-about__icon">
                            <LocationSVG />
                        </div>
                        Copenhagen
                    </li>
                    <li className="pf-about__link-item">
                        <a href="">
                            <div className="pf-about__icon">
                                <MailSVG />
                            </div>
                            emilkristoffersen93@gmail.com
                        </a>
                    </li>
                    <li className="pf-about__link-item">
                        <a href="">
                            <div className="pf-about__icon">
                                <LinkedinSVG />
                            </div>
                            Linkedin profile
                        </a>
                    </li>
                </ul>
                <div className="pf-shapes__line pf-shapes__line--large-space"></div>
                <section>
                    <h1 className="pf-about__title">More about me</h1>
                    <p className="pf-about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.</p>
                </section>
            </section>

            <section className="pf-about__wrapper">
                <div className="pf-shapes__line pf-shapes__line--small-space"></div>
                <div>
                    {toolsAndSkillsConfig.map((item, index) => <ToolsAndSkills config={item} key={index}/> )}
                </div>
            </section>
        </div>
    )
}

export default About