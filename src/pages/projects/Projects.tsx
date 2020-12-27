import React from 'react'
import ProjectItem from './ProjectItem.view'
import ProjectDetails from '../project-details/ProjectDetails.view'
import { IPortfolioProject } from '../projects/ProjectInterfaces'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Projects = ( {portfolioItems} : any) => {

  const portfolioProject: IPortfolioProject = {
    direction: 0,
    title: "Solarbase.",
    id: "002",
    thumbnail: "./assets/images/...",
    type: "UI Design",
    year: "2020",
    association: "Hobby project",
    synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet. do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
    tools: [
      {
        svg: "adobePS",
        name: "Adobe experience design"
      },
      {
        svg: "adobeXD",
        name: "Adobe experience design"
      },
    ]
}

  const { url, path } = useRouteMatch()

  return (
    <div className="pf-projects">
      <Switch>    
          <Route exact path={path}>
          {portfolioItems.map((item:any, index:number) => {
              return (
                <Link key={index} to={`${url}/${index}`}>
                  <ProjectItem item={item} key={index}/>
                </Link>
              )
            })}
          </Route>
          <Route path={`${path}/:topicId`}>
              <ProjectDetails portfolioProject={portfolioProject}/>
          </Route>
      </Switch>
    </div>
  )
}

export default Projects