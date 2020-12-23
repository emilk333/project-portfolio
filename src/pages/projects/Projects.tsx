import React from 'react'
import ProjectItem from './ProjectItem.view'
import { IPortfolioItems } from './ProjectInterfaces'

const Projects = () => {

  const portfolioItems = [
    {
      direction: 0,
      title : "Solarbase.",
      id : "002",
      thumbnail : "./assets/images/...",
      type : "UI Design",
      year : "2020",
      association : "Hobby project"
    },
    {
      direction: 1,
      title : "Solarbase.",
      id : "002",
      thumbnail : "./assets/images/...",
      type : "UI Design",
      year : "2020",
      association : "Hobby project"
    }
  ]

  return (
    <div className="pf-projects">
      {portfolioItems.map((item:any, index) => <ProjectItem item={item} key={index}/>)}
    </div>
  )
}

export default Projects