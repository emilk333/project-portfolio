import React from 'react'
import EmilDesignLogo from '../../foundation/javascript/svg/emil-design-logo-svg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="pf-navigation">
            <section className="pf-navigation__wrapper">
                <div className="pf-navigation__logo-container">
                    <Link to="/"><EmilDesignLogo /></Link>
                </div>
                <ul className="pf-navigation__nav-item-container">
                    <li className="pf-navigation__nav-item">
                        <Link to="/about">About / contact</Link>
                    </li>
                    <li className="pf-navigation__nav-item pf-navigation__nav-item--selected">
                        <Link to="/projects">My work</Link>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Navigation