import React from 'react'
import EmilDesignLogo from '../../foundation/javascript/svg/emil-design-logo-svg'
import ArrowSVG from '../../foundation/javascript/svg/arrow-svg'
import { motion } from 'framer-motion'

import {
    BrowserRouter as Router,
    NavLink,
  } from "react-router-dom";


const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}
const dotSize = { duration: 0.25, ease: [0.43, 0.13, 0.23, 0.96], height: '0', width: '0', opacity: 0}
const titleExit = { left: '30rem', opacity: 0 }
const logoExit = { left: '-25rem', opacity: 0}

const Frontpage = () => {
    return (
        <div className="pf-frontpage mobile-spacing">
            <motion.div exit="exit" transition={transition} initial={{opacity : 0}} animate={{opacity : 1}} className="pf-frontpage__wrapper">
                <motion.section exit={{left: '-10rem', opacity: 0}} className="pf-frontpage__layer">
                    <motion.div exit={dotSize} transition={transition} className="pf-shapes__dot pf-frontpage__dot-1"></motion.div>
                    <motion.p initial={{bottom: '6rem'}} animate={{bottom: '0rem'}} transition={{duration : 0.5}} className="pf-frontpage__label">2021 Portfolio</motion.p>
                </motion.section>
                <section className="pf-frontpage__layer">
                    <motion.div exit={logoExit} transition={transition} className="pf-frontpage__logo-container">
                        <EmilDesignLogo />
                    </motion.div>
                    <motion.div exit={{width: '0'}} transition={transition} className="pf-shapes__line"></motion.div>
                    <motion.div exit={titleExit} transition={transition} className="pf-frontpage__title-container">
                        <h1 className="pf-frontpage__title">Frontend and interface</h1>
                        <div className="pf-frontpage__carousel-container">
                            <div className="pf-frontpage__carousel">
                                <h1 className="pf-frontpage__title pf-frontpage__title--expression pf-frontpage__title--color-1"> Designer</h1>
                                <h1 className="pf-frontpage__title pf-frontpage__title--expression pf-frontpage__title--color-2">Developer</h1>
                                <h1 className="pf-frontpage__title pf-frontpage__title--expression pf-frontpage__title--color-3"> Explorer</h1>
                                <h1 className="pf-frontpage__title pf-frontpage__title--expression pf-frontpage__title--color-4">  Creator</h1>
                            </div>
                        </div>
                    </motion.div>
                </section>
                <motion.section exit={{right: '10rem', opacity: 0}} className="pf-frontpage__layer">
                    <motion.div initial={{top: '6rem'}} animate={{top: '0rem'}} transition={{duration : 0.5}} className="pf-frontpage__my-work-button">
                        <NavLink to="/projects">
                            <button className="pf-button pf-button--svg" >
                                See my work
                            <div className="pf-frontpage__arrow">
                                    <ArrowSVG />
                                </div>
                            </button>
                        </NavLink>
                    </motion.div>
                    <motion.div exit={dotSize} transition={transition} className="pf-shapes__dot pf-frontpage__dot-2"></motion.div>
                </motion.section>
            </motion.div>
        </div>
    )
}

export default Frontpage