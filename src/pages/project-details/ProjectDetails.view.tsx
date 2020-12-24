import React from 'react'
import ProjectDescriptionBar from '../../components/projects/ProjectDescriptionBar.view'
import ToolsAndSkillSVGGenerator from '../../components/tools-and-skills/ToolsAndSkillSVGGenerator.config'


const ProjectDetails = ( {portfolioProject}:any ) => {
    return (
        <div className="pf-project-details">
            <section className="pf-project-details__title-wrapper">
                <div className="pf-shapes__dot pf-project-details__dot-1"></div>
                <div className="pf-project-item__title-container">
                    <h2 className="pf-project-item__id pf-project-item__id--large">{portfolioProject.id}</h2>
                    <div className="pf-shapes__line pf-shapes__line--xl-space"></div>
                    <h1 className="pf-project-item__title">{portfolioProject.title}</h1>
                    <div className="pf-shapes__dot pf-project-details__dot-2"></div>
                    <div className="pf-shapes__dot pf-project-details__dot-3"></div>
                </div>
            </section>
            <section className="pf-project-details__container">
                <div className="pf-project-details__intro-wrapper">
                    <div className="pf-project-details__text-section">
                        <h3 className="pf-project-details__sub-header">Tools</h3>
                        {portfolioProject.tools.map((item:any, index:number) => {
                            return <ToolsAndSkillSVGGenerator svg={item.svg} key={index}/>
                        })}
                    </div>
                    <div className="pf-project-details__text-section">
                        <h3 className="pf-project-details__sub-header">Project Synopsis</h3>
                        <p className="pf-project-details__text">{portfolioProject.synopsis}</p>
                    </div>
                    <div className="pf-shapes__line pf-shapes__line--small-space"></div>
                </div>
                <div className="pf-project-details__bar-container">
                    <ProjectDescriptionBar type={portfolioProject.type} year={portfolioProject.year} association={portfolioProject.association} flipped={true} direction={portfolioProject.direction} />
                </div>
            </section>
        </div>
    )
}

export default ProjectDetails