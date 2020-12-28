import './main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Navigation from './components/navigation/Navigation.view'
import Frontpage from './pages/frontpage/Frontpage.view'
import Projects from './pages/projects/Projects'
import About from './pages/about/About.view'


const App = () => {

  const portfolioItems = [
    {
      direction: 0,
      title: "Solarbase.",
      id: "001",
      thumbnail: "./assets/images/...",
      type: "UI Design",
      year: "2020",
      association: "Hobby project",
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      tools: [
        {
          svg: "adobeXD",
          name: "Adobe experience design"
        },
      ]
    },
    {
      direction: 1,
      title: "Futurenow.",
      id: "002",
      thumbnail: "./assets/images/...",
      type: "UI Design",
      year: "2020",
      association: "Hobby project",
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      tools: [
        {
          svg: "adobeXD",
          name: "Adobe experience design"
        },
      ]
    }
  ]

  return (
    <Router>
      <div style={{ height: "100vh" }}>
        <Navigation />
        <Switch>

          <Route path="/" exact>
            <Frontpage />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/projects">
            <Projects portfolioItems={portfolioItems}/>
          </Route>

        </Switch> 
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))