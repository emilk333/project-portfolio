import React from 'react'
import ProjectItem from './ProjectItem.view'
import ProjectDetails from '../project-details/ProjectDetails.view'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const Projects = ( {portfolioItems} : any ) => {

  const portfolioItemsData = [...portfolioItems]
  const { url, path } = useRouteMatch()
  
  return (
    <div className="pf-projects">
      <Switch>    
          <Route exact path={path}>
          {portfolioItemsData.map((item:any, index:number) => {
              return (
                <Link key={index} to={`${url}/00${index+1}`}>
                  <ProjectItem item={item}/>
                </Link>
              )
            })}
          </Route>
          <Route path={`${path}/:projectId`} component={({match}:any) => <ProjectDetails portfolioItemsData={portfolioItemsData} match={match}/>} />
      </Switch>
    </div>
  )
}

export default Projects