import React from 'react'

const ProjectDescriptionBar = ( { type, year, association, flipped } :any ) => {
    
    const componentClassMargin = "pf-project-bar__content-margin"
    const componentClassFlipped = "pf-project-bar--flipped"

    return (
        <article className={`pf-project-bar ${flipped ? componentClassFlipped : ""}`}>
            <div className={flipped ? componentClassMargin : ""}>
                <h3 className="pf-project-bar__label">Type</h3>
                <p className="pf-project-bar__value">{type}</p>
            </div>
            <div className={flipped ? componentClassMargin : ""}>
                <h3 className="pf-project-bar__label">Year</h3>
                <p className="pf-project-bar__value">{year}</p>
            </div>
            <div className={flipped ? componentClassMargin : ""}>
                <h3 className="pf-project-bar__label">Association</h3>
                <p className="pf-project-bar__value">{association}</p>
            </div>
        </article>
    )
}

export default ProjectDescriptionBar