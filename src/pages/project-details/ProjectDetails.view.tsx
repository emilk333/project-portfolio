import React from 'react'
import ProjectDescriptionBar from '../../components/projects/ProjectDescriptionBar.view'
import ToolsAndSkillSVGGenerator from '../../components/tools-and-skills/ToolsAndSkillSVGGenerator.config'


const ProjectDetails = ( {portfolioItemsData, match}:any ) => {
    
    const clickedProject = portfolioItemsData.find((item:any) => item.id === match.params.projectId)
    
    if (!clickedProject) return (
        <div className="pf-project-details__error">
            <h1 className="pf-project-item__id">Sorry!</h1>
            <h1 className="pf-project-details__sub-header">Error fetching portfolio project</h1>
        </div>
    )
    return (
        <div className="pf-project-details">
            <section className="pf-project-details__title-wrapper">
                <div className="pf-shapes__dot pf-project-details__dot-1"></div>
                <div className="pf-project-item__title-container">
                    <h2 className="pf-project-item__id pf-project-item__id--large">{clickedProject.id}</h2>
                    <div className="pf-shapes__line pf-shapes__line--xl-space"></div>
                    <h1 className="pf-project-item__title">{clickedProject.title}</h1>
                    <div className="pf-shapes__dot pf-project-details__dot-2"></div>
                    <div className="pf-shapes__dot pf-project-details__dot-3"></div>
                </div>
            </section>
            <section className="pf-project-details__container">
                <div className="pf-project-details__intro-wrapper">
                    <div className="pf-project-details__text-section">
                        <h3 className="pf-project-details__sub-header">Tools</h3>
                        {clickedProject.tools.map((item:any, index:number) => {
                            return (
                                <div key={index} className="pf-project-details__icon-container">
                                    <ToolsAndSkillSVGGenerator svg={item.svg} key={index}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="pf-project-details__text-section">
                        <h3 className="pf-project-details__sub-header">Project Synopsis</h3>
                        <p className="pf-project-details__text">{clickedProject.synopsis}</p>
                    </div>
                    <div className="pf-shapes__line pf-shapes__line--small-space"></div>
                </div>
                <div className="pf-project-details__bar-container">
                    <ProjectDescriptionBar type={clickedProject.type} year={clickedProject.year} association={clickedProject.association} flipped={true} direction={clickedProject.direction} />
                </div>
            </section>
        </div>
    )
}

export default ProjectDetails