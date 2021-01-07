import './main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion'


import Navigation from './components/navigation/Navigation.view'
import Frontpage from './pages/frontpage/Frontpage.view'
import Projects from './pages/projects/Projects'
import About from './pages/about/About.view'


const App = () => {

  const portfolioItems = [
    {
      title: "Solarbase.",
      id: "001",
      thumbnail: "solarbase",
      type: "UI Design",
      year: "2019",
      association: "Hobby project",
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      tools: [
        {
          svg: "adobeXD",
          name: "Adobe Experience Design"
        },
        {
          svg: "adobePS",
          name: "Adobe Photoshop"
        }
      ]
    },
    {
      title: "Moonshine Furniture",
      id: "002",
      thumbnail: "furniture",
      type: "UI Design",
      year: "2020",
      association: "Hobby project",
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      tools: [
        {
          svg: "adobeXD",
          name: "Adobe experience design"
        },
        {
          svg: "adobePS",
          name: "Adobe Photoshop"
        }
      ]
    },
    {
      title: "Futurenow.",
      id: "003",
      thumbnail: "futurenow",
      type: "UI + Service Experience Design",
      year: "2019",
      association: "Master Thesis Project",
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      tools: [
        {
          svg: "adobeXD",
          name: "Adobe experience design"
        }
      ]
    },
    {
      title: "Fightiq.",
      id: "004",
      thumbnail: "fightiq",
      type: "UI Design + SCSS implementation",
      year: "2020",
      association: "Collaborative Hobby Project",
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      tools: [
        {
          svg: "adobeXD",
          name: "Adobe experience design"
        },
        {
          svg: "sass",
          name: "SCSS (BEM)"
        },
        {
          svg: "flask",
          name: "Flask Webapp (Python)"
        }
      ]
    },
    {
      title: "VIP.",
      id: "005",
      thumbnail: "vip",
      type: "UI + Service Experience Design",
      year: "2018",
      association: "Industry Collaboration",
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      tools: [
        {
          svg: "adobeXD",
          name: "Adobe experience design"
        }
      ]
    }, 
    {
      title: "Todolist.",
      id: "006",
      thumbnail: "todoList",
      type: "UI Design + Frontend development",
      year: "2018",
      association: "Hobby Project",
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      tools: [
        {
          svg: "adobeXD",
          name: "Adobe experience design"
        },
        {
          svg: "angular",
          name: "Angular 4"
        }
      ]
    }
  ]

  return (
    <Router>
      <div style={{ height: "100vh" }}>
        <Navigation />
        <Route render={({location}) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact render={() => <Frontpage />}/>
                <Route path="/about" exact render={() => <About />}/>
                <Route path="/projects" exact render={() => <Projects portfolioItems={portfolioItems}/>}/>
              </Switch> 
            </AnimatePresence>
          )}
        >  
        </Route>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))