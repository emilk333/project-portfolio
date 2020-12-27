import React from 'react'
import EmilDesignLogo from '../../foundation/javascript/svg/emil-design-logo-svg'
import {
    BrowserRouter as Router,
    NavLink,
  } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="pf-navigation">
            <section className="pf-navigation__wrapper">
                <div className="pf-navigation__logo-container">
                    <NavLink to="/"><EmilDesignLogo /></NavLink>
                </div>
                <ul className="pf-navigation__nav-item-container">
                    <li className="pf-navigation__nav-item ">
                        <NavLink to="/about" className="pf-navigation__nav-item--underline" activeClassName="pf-navigation__nav-item--selected">About / contact</NavLink>
                    </li>
                    <li className="pf-navigation__nav-item">
                        <NavLink to="/projects" className="pf-navigation__nav-item--underline"  activeClassName="pf-navigation__nav-item--selected">My work</NavLink>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Navigation