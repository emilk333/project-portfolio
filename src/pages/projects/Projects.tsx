import React from 'react'
import ProjectDetails from '../project-details/ProjectDetails.view'
import ProjectDescriptionBar from '../../components/projects/ProjectDescriptionBar.view'
import ProjectThumbnailMap from '../../foundation/javascript/projectThumbnailMap'
import FadeInSection from '../../foundation/javascript/FadeInSection'
import { AnimatePresence } from 'framer-motion'
import {motion} from 'framer-motion'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const Projects = ({ portfolioItems }: any) => {

  const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96]}
  const thumbnailImage = {width: '100%', bottom: 0, opacity: 0}
  const portfolioItemsData = [...portfolioItems]
  const { url, path } = useRouteMatch()

  const renderProjectItem = (item: any, index: number) => {
    return (
      <article className="pf-project-item">
        <div className="pf-project-item__container">
          <Link to={`${url}/00${index + 1}`}>
            <motion.div className="pf-project-item__thumbnail-container" initial={{opacity : 1}} animate="animate" exit={thumbnailImage} transition={transition}>
              <ProjectThumbnailMap img={item.thumbnail} />
            </motion.div>
          </Link>
          <section className="pf-project-item__info-wrapper">
            <div className="pf-shapes__dot pf-project-item__dot-1"></div>
            <div className="pf-shapes__dot pf-project-item__dot-3"></div>
            <div className="pf-shapes__dot pf-project-item__dot-4"></div>
            <div className="pf-project-item__title-container">
              <div className="pf-shapes__line pf-shapes__line--no-left-space"></div>
              <div className="pf-project-item__title-wrapper">
                <h1 className="pf-project-item__title">{item.title}</h1>
                <h2 className="pf-project-item__id">{item.id}</h2>
              </div>
              <div className="pf-shapes__dot pf-project-item__dot-2"></div>
            </div>
            < ProjectDescriptionBar type={item.type} year={item.year} association={item.association} flipped={true} />
            <div className="pf-shapes__line pf-shapes__line--small-space"></div>
          </section>
        </div>
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
        <Route path={`${path}/:projectId`} render={({ match }: any) => <ProjectDetails portfolioItemsData={portfolioItemsData} match={match} />} />
      </Switch>
    </div>
  )
}

export default Projects