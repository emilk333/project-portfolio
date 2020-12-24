import './main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

import Navigation from './components/navigation/Navigation.view'
import Frontpage from './pages/frontpage/Frontpage.view'
import Projects from './pages/projects/Projects'
import About from './pages/about/About.view'
import ProjectDetails from './pages/project-details/ProjectDetails.view'

import { IPortfolioProject } from './pages/projects/ProjectInterfaces'


const App = () => {

    const portfolioProject : IPortfolioProject = {
      direction: 0,
      title : "Solarbase.",
      id : "002",
      thumbnail : "./assets/images/...",
      type : "UI Design",
      year : "2020",
      association : "Hobby project",
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      tools: [
        {
          svg: "adobeXD",
          name: "Adobe experience design"
        },
      ]
    }

    const portfolioItems = [
        {
          direction: 0,
          title : "Solarbase.",
          id : "002",
          thumbnail : "./assets/images/...",
          type : "UI Design",
          year : "2020",
          association : "Hobby project",
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
          title : "Futurenow.",
          id : "003",
          thumbnail : "./assets/images/...",
          type : "UI Design",
          year : "2020",
          association : "Hobby project",
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
        <div style={{ height: "100%" }}>
            <Navigation />
            {/* <Frontpage /> */}
            {/* <About /> */}
            {/* <Projects portfolioItems={portfolioItems}/> */}
            < ProjectDetails portfolioProject={portfolioProject}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))