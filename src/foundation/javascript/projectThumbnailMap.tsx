import React from 'react'
import furniture from '../../assets/images/furniture-bg-1.png'
import solarbase from '../../assets/images/solarbase-bg-1.png'
import futurenow from '../../assets/images/futurenow-bg-1.png'
import fightiq from '../../assets/images/fightiq-bg-1.png'
import vip from '../../assets/images/vip-bg-1.png'
import todoList from '../../assets/images/todoList-bg-1.png'
import LazyLoad from 'react-lazyload'

interface IthumbnailDictionary {
    furniture : string,  
    solarbase : string,
    futurenow : string,
    fightiq : string, 
    vip : string, 
    todoList : string
}

const projectThumbnailMap = ( { img }: any ) : JSX.Element => {
    let returnImage : JSX.Element
    
    const thumbnailDictionary : IthumbnailDictionary = {
        furniture : furniture,
        solarbase : solarbase,
        futurenow : futurenow, 
        fightiq : fightiq,
        vip : vip,
        todoList : todoList
    }
    
    img ? returnImage = <LazyLoad height={200}><div className="pf-project-item__thumbnail" style={{backgroundImage : `url(${thumbnailDictionary[img as keyof IthumbnailDictionary]})`}}></div></LazyLoad>: <div></div>
    return returnImage
}

export default projectThumbnailMap