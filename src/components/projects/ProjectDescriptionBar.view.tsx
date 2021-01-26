import React from 'react'
import {motion} from 'framer-motion'

const ProjectDescriptionBar = ( { type, year, association, flipped } :any ) => {
    
    const componentClassMargin = "pf-project-bar__content-margin"
    const componentClassFlipped = "pf-project-bar--flipped"
    const transitionDelay1= {duration: 1, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.3}
    const transitionDelay2= {duration: 1, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.5}

    return (
        <article className={`pf-project-bar ${flipped ? componentClassFlipped : ""}`}>
            <motion.div initial={{opacity:0}} exit={{opacity: 0}} animate={{opacity:1}} transition={{ease: 'easeInOut', duration: 1}} className={flipped ? componentClassMargin : ""}>
                <h3 className="pf-project-bar__label">Type</h3>
                <p className="pf-project-bar__value">{type}</p>
            </motion.div>
            <motion.div initial={{opacity:0}} exit={{opacity: 0}} animate={{opacity:1}} transition={transitionDelay1} className={flipped ? componentClassMargin : ""}>
                <h3 className="pf-project-bar__label">Year</h3>
                <p className="pf-project-bar__value">{year}</p>
            </motion.div>
            <motion.div initial={{opacity:0}} exit={{opacity: 0}} animate={{opacity:1}} transition={transitionDelay2} className={flipped ? componentClassMargin : ""}>
                <h3 className="pf-project-bar__label">Association</h3>
                <p className="pf-project-bar__value">{association}</p>
            </motion.div>
        </article>
    )
}

export default ProjectDescriptionBar