import React from 'react'
import EmilDesignLogo from '../../foundation/javascript/svg/emil-design-logo-svg'
import ArrowSVG from '../../foundation/javascript/svg/arrow-svg'

const Frontpage = () => {
    return (
        <div className="pf-frontpage mobile-spacing">
            <div className="pf-frontpage__wrapper">
                <section className="pf-frontpage__layer">
                    <div className="pf-shapes__dot pf-frontpage__dot-1"></div>
                    <p className="pf-frontpage__label">2021 Portfolio</p>
                </section>
                <section className="pf-frontpage__layer">
                    <div className="pf-frontpage__logo-container">
                        <EmilDesignLogo />
                    </div>
                    <div className="pf-shapes__line"></div>
                    <div className="pf-frontpage__title-container">
                        <h1 className="pf-frontpage__title">Frontend and interface</h1>
                        <div className="pf-frontpage__carousel-container">
                            <div className="pf-frontpage__carousel">
                                <h1 className="pf-frontpage__title pf-frontpage__title--expression pf-frontpage__title--color-1"> Designer</h1>
                                <h1 className="pf-frontpage__title pf-frontpage__title--expression pf-frontpage__title--color-2">Developer</h1>
                                <h1 className="pf-frontpage__title pf-frontpage__title--expression pf-frontpage__title--color-3"> Explorer</h1>
                                <h1 className="pf-frontpage__title pf-frontpage__title--expression pf-frontpage__title--color-4">  Creator</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pf-frontpage__layer">
                    <button className="pf-button pf-button--svg">
                        See my work
                        <div className="pf-frontpage__arrow">
                            <ArrowSVG />
                        </div>
                    </button>
                    <div className="pf-shapes__dot pf-frontpage__dot-2"></div>
                </section>
            </div>
        </div>
    )
}

export default Frontpage