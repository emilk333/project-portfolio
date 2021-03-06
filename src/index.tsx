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
      shadow: 'rgb(230 131 61 / 20%) 0px 18px 50px -10px',
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
      ],
      images: [
        {
          _uid: "1",
          component: "type1",
          image: [
            {
              imageId: "solarBase3",
              composition: "desktop"
            },
            {
              imageId: "solarBase1",
              composition: "desktop"
            },
            {
              imageId: "solarBase2",
              composition: "desktop"
            }
          ]
        },
      ]
    },
    {
      title: "Moonshine Furniture",
      id: "002",
      thumbnail: "furniture",
      type: "UI Design",
      year: "2020",
      shadow: 'rgba(13, 35, 20, 0.20) 0px 18px 50px -10px',
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
      ],
      images: [
        {
          _uid: "1",
          component: "type2",
          image: [
            {
              imageId: "moonshine1",
              composition: "desktop"
            },
            {
              imageId: "moonshine2",
              composition: "mobile"
            }
          ]
        },
        {
          _uid: "2",
          component: "type2",
          image: [
            {
              imageId: "moonshine3",
              composition: "desktop"
            },
            {
              imageId: "moonshine4",
              composition: "mobile"
            }
          ]
        },
        {
          _uid: "2",
          component: "type2",
          image: [
            {
              imageId: "moonshine5",
              composition: "desktop"
            },
            {
              imageId: "moonshine6",
              composition: "mobile"
            }
          ]
        },
        {
          _uid: "2",
          component: "type2",
          image: [
            {
              imageId: "moonshine8",
              composition: "desktop"
            },
            {
              imageId: "moonshine9",
              composition: "mobile"
            }
          ]
        }
      ]
    },
    {
      title: "Futurenow.",
      id: "003",
      thumbnail: "futurenow",
      type: "UI + Service Experience Design",
      year: "2019",
      shadow: 'rgb(67 176 253 / 15%) 0px 18px 50px -10px',
      association: "Master Thesis Project",
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      tools: [
        {
          svg: "adobeXD",
          name: "Adobe experience design"
        }
      ],
      images: [
        {
          _uid: "3",
          component: "type1",
          image: [
            {
              imageId: "futurenow2",
              composition: "desktop"
            },
            {
              imageId: "futurenow3",
              composition: "desktop"
            },
            {
              imageId: "futurenow1",
              composition: "desktop"
            }
          ]
        }
      ]
    },
    {
      title: "Fightiq.",
      id: "004",
      thumbnail: "fightiq",
      type: "UI Design + SCSS implementation",
      year: "2020",
      shadow: 'rgba(253, 67, 67, 0.20) 0px 18px 50px -10px',
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
      ],
      images: []
    },
    {
      title: "VIP.",
      id: "005",
      thumbnail: "vip",
      type: "UI + Service Experience Design",
      year: "2018",
      shadow: 'rgba(67, 98, 253, 0.15) 0px 18px 50px -10px',
      association: "Industry Collaboration",
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      tools: [
        {
          svg: "adobeXD",
          name: "Adobe experience design"
        }
      ],
      images: [
        {
          _uid: "4",
          component: "type1",
          image: [
            {
              imageId: "vip1",
              composition: "desktop"
            },
            {
              imageId: "vip2",
              composition: "desktop"
            },
            {
              imageId: "vip3",
              composition: "desktop"
            },
            {
              imageId: "vip4",
              composition: "desktop"
            }
          ]
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
      shadow: 'rgba(146, 67, 253, 0.15) 0px 18px 50px -10px',
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
      ],
      images: [
        {
          _uid: "6",
          component: "type1",
          image: [
            {
              imageId: "todo1",
              composition: "desktop"
            }
          ]
        }
      ]
    }
  ]

  return (
    <Router>
      <div style={{ height: "100vh" }}>
        <div className="tmp__home--bg">
          <div className="tmp__home--bg--first"></div>
          <div className="tmp__home--bg--second"></div>
        </div>
        <Navigation />
        <Route render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact render={() => <Frontpage />} />
              <Route path="/about" render={() => <About />} />
              <Route path="/projects" render={() => <Projects portfolioItems={portfolioItems} />} />
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