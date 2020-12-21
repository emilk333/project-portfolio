import './main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

import Navigation from './components/navigation/Navigation.view'


const App = () => {
    return (
        <div>
            <Navigation />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))