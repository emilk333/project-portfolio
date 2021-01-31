import React from 'react'
import ProjectDetails from '../project-details/ProjectDetails.view'
import ProjectDescriptionBar from '../../components/projects/ProjectDescriptionBar.view'
import ProjectThumbnailMap from '../../foundation/javascript/projectThumbnailMap'
import FadeInSection from '../../foundation/javascript/FadeInSection'
import { AnimatePresence, motion } from 'framer-motion'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const Projects = ({ portfolioItems }: any) => {

  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}
  const transition2 = { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.26]}
  const portfolioItemsData = [...portfolioItems]
  const { url, path } = useRouteMatch()

  const renderProjectItem = (item: any, index: number) => {
    return (
      <motion.article className="pf-project-item">
        <div className="pf-project-item__container">
          <Link to={`${url}/00${index + 1}`}>
            <motion.div exit={{width:'0rem', opacity: 0}} transition={transition} className="pf-project-item__thumbnail-container" style={{boxShadow: item.shadow}}>
              <motion.div exit={{top:'100vh'}} style={{position:"relative"}} transition={{delay: 0.8, duration: 0.6, ease: 'easeInOut'}}>
                <ProjectThumbnailMap img={item.thumbnail} />
              </motion.div>
            </motion.div>
          </Link>
          <motion.section exit={{opacity: 0 }} transition={transition2} className="pf-project-item__info-wrapper">
            <div className="pf-shapes__dot pf-project-item__dot-1"></div>
            <div className="pf-shapes__dot pf-project-item__dot-3"></div>
            <div className="pf-shapes__dot pf-project-item__dot-4"></div>
            <motion.div initial={{left:'0rem'}} animate={{left:'-8.5rem'}} className="pf-project-item__title-container">
              <div className="pf-shapes__line pf-shapes__line--no-left-space"></div>
              <motion.div exit={{left: '15rem' }} transition={transition2}  className="pf-project-item__title-wrapper">
                <h1 className="pf-project-item__title">{item.title}</h1>
                <h2 className="pf-project-item__id">{item.id}</h2>
              </motion.div>
              <div className="pf-shapes__dot pf-project-item__dot-2"></div>
            </motion.div>
            <ProjectDescriptionBar type={item.type} year={item.year} association={item.association} flipped={true} />
            <div className="pf-shapes__line pf-shapes__line--small-space"></div>
          </motion.section>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.div exit="exit" transition={transition} initial="inital" animate="animate" className="pf-projects mobile-spacing">
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
    </motion.div>
  )
}

export default Projects