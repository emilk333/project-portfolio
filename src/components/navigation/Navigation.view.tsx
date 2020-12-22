import React from 'react'
import EmilDesignLogo from '../../foundation/javascript/svg/emil-design-logo-svg'

const Navigation = () => {
    return (
        <nav className="pf-navigation">
            <section className="pf-navigation__wrapper">
                <div className="pf-navigation__logo-container">
                    <a href="">
                        <EmilDesignLogo />
                    </a>
                </div>
                <ul className="pf-navigation__nav-item-container">
                    <li className="pf-navigation__nav-item">
                        <a href="">About / contact</a>
                    </li>
                    <li className="pf-navigation__nav-item pf-navigation__nav-item--selected">
                        <a href="">Work</a>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Navigation