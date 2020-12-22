import './main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

import Navigation from './components/navigation/Navigation.view'
import Frontpage from './pages/frontpage/Frontpage.view'


const App = () => {
    return (
        <div style={{ height: "100vh" }}>
            <Navigation />
            <Frontpage />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))