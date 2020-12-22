import './main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

import Navigation from './components/navigation/Navigation.view'
import Frontpage from './pages/frontpage/Frontpage.view'
import About from './pages/about/About.view'


const App = () => {
    return (
        <div style={{ height: "100%" }}>
            <Navigation />
            {/* <Frontpage /> */}
            <About />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))