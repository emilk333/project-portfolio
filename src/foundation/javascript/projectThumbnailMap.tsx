import React from 'react'
import furniture from '../../assets/images/moonshine/furniture-bg-1.png'
import solarbase from '../../assets/images/solarbase/solarbase-bg-2.png'
import futurenow from '../../assets/images/futurenow/futurenow-bg-1.png'
import fightiq from '../../assets/images/fightiq-bg-1.png'
import vip from '../../assets/images/vip/vip-bg-1.png'
import todoList from '../../assets/images/todoList-bg-1.png'
import LazyLoad from 'react-lazyload'
import {motion} from 'framer-motion'

interface IthumbnailDictionary {
    furniture: string,
    solarbase: string,
    futurenow: string,
    fightiq: string,
    vip: string,
    todoList: string
}

const projectThumbnailMap = ({ img }: any): JSX.Element => {

    let returnImage: JSX.Element
    const transitionSlow = { duration: 0.25, ease: [0.43, 0.13, 0.23, 0.96]}

    const thumbnailDictionary: IthumbnailDictionary = {
        furniture: furniture,
        solarbase: solarbase,
        futurenow: futurenow,
        fightiq: fightiq,
        vip: vip,
        todoList: todoList
    }

    img ? returnImage = <LazyLoad height={200}><motion.div 
                                whileHover={{scale: 1.04}} 
                                transition={transitionSlow} 
                                className="pf-project-item__thumbnail" 
                                style={{ backgroundImage: `url(${thumbnailDictionary[img as keyof IthumbnailDictionary]})` }}></motion.div>
                        </LazyLoad> : <div></div>
    return returnImage
}

export default projectThumbnailMap