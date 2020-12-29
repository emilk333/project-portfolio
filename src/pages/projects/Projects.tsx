import React from 'react'
import ProjectDetails from '../project-details/ProjectDetails.view'
import ProjectDescriptionBar from '../../components/projects/ProjectDescriptionBar.view'
import ProjectThumbnailMap from '../../foundation/javascript/projectThumbnailMap'
import FadeInSection from '../../foundation/javascript/FadeInSection'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const Projects = ({ portfolioItems }: any) => {

  const portfolioItemsData = [...portfolioItems]
  const { url, path } = useRouteMatch()

  const renderProjectItem = (item: any, index: number) => {
    return (
      <article className="pf-project-item">
        <section className="pf-project-item__info-wrapper">
          <div className="pf-shapes__dot pf-project-item__dot-1"></div>
          <div className="pf-shapes__dot pf-project-item__dot-3"></div>
          <div className="pf-project-item__title-container">
            <div className="pf-shapes__line pf-shapes__line--no-left-space"></div>
            <div className="pf-project-item__title-wrapper">
              <h1 className="pf-project-item__title">{item.title}</h1>
              <h2 className="pf-project-item__id">{item.id}</h2>
            </div>
            <div className="pf-shapes__dot pf-project-item__dot-2"></div>
          </div>
          < ProjectDescriptionBar type={item.type} year={item.year} association={item.association} flipped={true}/>
        </section>
        <Link className="pf-project-item__thumbnail-container" to={`${url}/00${index + 1}`}>
          <ProjectThumbnailMap img={item.thumbnail} />
        </Link>
      </article>
    )
  }

  return (
    <div className="pf-projects mobile-spacing">
      <Switch>
        <Route exact path={path}>
          {portfolioItemsData.map((item: any, index: number) => {
            return (
              <FadeInSection key={index}>
                {renderProjectItem(item, index)}
              </FadeInSection>
            )
          })}
        </Route>
        <Route path={`${path}/:projectId`} component={({ match }: any) => <ProjectDetails portfolioItemsData={portfolioItemsData} match={match} />} />
      </Switch>
    </div>
  )
}

export default Projects