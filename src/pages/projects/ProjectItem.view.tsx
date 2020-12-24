import React from 'react'
import { IPortfolioItems } from './ProjectInterfaces'
import ProjectDescriptionBar from '../../components/projects/ProjectDescriptionBar.view'

const ProjectItem = ( { item } : any ) => { 

    const renderLeftAlignedProject = () => {
        return (
            <article className="pf-project-item">
                <a href="" style={{height : "100%"}}>
                    <section className="pf-project-item__thumbnail" style={{backgroundImage : `url(${item.thumbnail})`}}></section>
                </a>
                <a href="" style={{width : "100%"}}>
                    <section className="pf-project-item__info-wrapper">
                        <div className="pf-shapes__dot pf-project-item__dot-1"></div>
                        <div className="pf-project-item__title-container">
                            <h2 className="pf-project-item__id">{item.id}</h2>
                            <div className="pf-shapes__line pf-shapes__line--medium-space"></div>
                            <h1 className="pf-project-item__title">{item.title}</h1>
                            <div className="pf-shapes__dot pf-project-item__dot-2"></div>
                        </div>
                        < ProjectDescriptionBar type={item.type} year={item.year} association={item.association} flipped={false} direction={item.direction} />
                    </section>
                </a>
            </article>
        )
    }

    const renderRightAlignedProject = () => {
        return (
            <article className="pf-project-item">
                <a href="" style={{width : "100%"}}>
                    <section className="pf-project-item__info-wrapper pf-project-item__info-wrapper--right">
                        <div className="pf-shapes__dot pf-project-item__dot-1 pf-project-item__dot-1--right"></div>
                        <div className="pf-project-item__title-container pf-project-item__title-container--right">
                            <h2 className="pf-project-item__id">{item.id}</h2>
                            <div className="pf-shapes__line pf-shapes__line--medium-space"></div>
                            <h1 className="pf-project-item__title">{item.title}</h1>
                            <div className="pf-shapes__dot pf-project-item__dot-2 pf-project-item__dot-2--right"></div>
                        </div>
                        < ProjectDescriptionBar type={item.type} year={item.year} association={item.association} flipped={false} direction={item.direction} />
                    </section>
                </a>
                <a href="" style={{height : "100%"}}>
                    <section className="pf-project-item__thumbnail" style={{backgroundImage : `url(${item.thumbnail})`}}></section>
                </a>
            </article>
        )
    }

    return (
        <div>
            {item.direction === 0 ? renderLeftAlignedProject() : renderRightAlignedProject() }
        </div>
    )
}

export default ProjectItem