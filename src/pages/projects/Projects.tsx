import React from 'react'
import ProjectItem from './ProjectItem.view'

const Projects = ( {portfolioItems} : any) => {

  return (
    <div className="pf-projects">
      {portfolioItems.map((item:any, index:number) => <ProjectItem item={item} key={index}/>)}
    </div>
  )
}

export default Projects