import React from 'react'
import ProjectDescriptionBar from '../../components/projects/ProjectDescriptionBar.view'
import ToolsAndSkillSVGGenerator from '../../components/tools-and-skills/ToolsAndSkillSVGGenerator.config'
import DynamicImageCompType1 from '../project-details/dynamic-image-components/dynamic-image-comp-type-1'
import DynamicImageCompType2 from '../project-details/dynamic-image-components/dynamic-image-comp-type-2'
import { motion } from 'framer-motion'

const ProjectDetails = ({ portfolioItemsData, match }: any) => {
    
    const Components:any = {
        type1: DynamicImageCompType1,
        type2: DynamicImageCompType2
    }
      
    const dynamicComponent = (block:any) => {

    if (typeof Components[block.component] !== "undefined") {
        return React.createElement(Components[block.component], {
            key: block._uid,
            block: block
        })
    }
    
    return React.createElement(() => 
        <div>The component {block.component} has not been created yet.</div>,
        { key: block._uid })
    }
    
    const clickedProject = portfolioItemsData.find((item: any) => item.id === match.params.projectId)
    const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}
    const transitionSlow = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96]}
    
    if (!clickedProject) return (
        <div className="pf-project-details__error">
            <h1 className="pf-project-item__id">Sorry!</h1>
            <h1 className="pf-project-details__sub-header">Error fetching portfolio project</h1>
        </div>
    )
    return (
        <motion.div initial={{opacity:0}} exit={{opacity:0}} animate={{opacity:1}} transition={transition} className="pf-project-details">
            <section className="pf-project-details__title-wrapper">
                <motion.div className="pf-project-item__title-container" initial={{left: '20rem'}} animate={{left: '-15rem'}} exit={{left: '20rem'}} transition={{ease: "easeInOut", duration: 0.7}} >
                    <div className="pf-shapes__dot pf-project-details__dot-1"></div>
                    <motion.div className="pf-shapes__line pf-shapes__line--no-left-space-large" ></motion.div>
                    <div className="pf-project-item__title-wrapper">
                        <motion.h1 initial={{fontSize:'2.4rem'}} exit={{fontSize:'2.4rem'}} animate={{fontSize:'3.8rem'}} transition={transitionSlow} className="pf-project-item__title pf-project-item__title--details">{clickedProject.title}</motion.h1>
                        <motion.h2 className="pf-project-item__id pf-project-item__id--details" animate={{left:'-25.5rem'}} transition={transitionSlow}>{clickedProject.id}</motion.h2>
                    </div>
                    <div className="pf-shapes__dot pf-project-details__dot-2"></div>
                    <div className="pf-shapes__dot pf-project-details__dot-3"></div>
                </motion.div>
            </section>
            <section className="pf-project-details__container">
                <div className="pf-project-details__intro-wrapper">
                    <motion.div initial={{bottom:'-10rem', opacity: 0}} animate={{bottom:'0rem', opacity: 1}} exit={{bottom:'-10rem', opacity: 0}} transition={transition} className="pf-project-details__text-section">
                        <h3 className="pf-project-details__sub-header">Tools</h3>
                        {clickedProject.tools.map((item: any, index: number) => {
                            return (
                                <div key={index} className="pf-project-details__icon-container">
                                    <ToolsAndSkillSVGGenerator svg={item.svg} key={index} />
                                </div>
                            )
                        })}
                    </motion.div>
                    <motion.div initial={{bottom:'-20rem', opacity: 0}} animate={{bottom:'0rem', opacity: 1}} exit={{bottom:'-20rem', opacity: 0}} transition={transition} className="pf-project-details__text-section">
                        <h3 className="pf-project-details__sub-header">Project Synopsis</h3>
                        <p className="pf-project-details__text">{clickedProject.synopsis}</p>
                    </motion.div>
                    <div className="pf-shapes__line pf-shapes__line--small-space"></div>
                </div>
                <div className="pf-project-details__bar-container">
                    <ProjectDescriptionBar type={clickedProject.type} year={clickedProject.year} association={clickedProject.association} flipped={true} direction={clickedProject.direction} />
                </div>
            </section>
            <section className="pf-project-details__project-image-container">
                {clickedProject.images.map((block:any) => dynamicComponent(block))}
            </section>
        </motion.div>
    )
}

export default ProjectDetails