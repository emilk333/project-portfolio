import React from 'react'
import furniture from '../../assets/images/furniture-bg-1.png'
import solarbase from '../../assets/images/solarbase-bg-1.png'
import futurenow from '../../assets/images/adobeXD.png'
import fightiq from '../../assets/images/adobeXD.png'
import vip from '../../assets/images/adobeXD.png'
import todoList from '../../assets/images/adobeXD.png'

interface IthumbnailDictionary {
    furniture : string,  
    solarbase : string,
    futurenow : string,
    fightiq : string, 
    vip : string, 
    todoList : string 
}

const projectThumbnailMap = ( { img }: any ) : JSX.Element => {
    console.log(img)
    let returnImage : JSX.Element
    const thumbnailDictionary : IthumbnailDictionary = {
        furniture : furniture,
        solarbase : solarbase,
        futurenow : futurenow, 
        fightiq : fightiq,
        vip : vip,
        todoList : todoList
    }
    
    img ? returnImage = <div className="pf-project-item__thumbnail" style={{backgroundImage : `url(${thumbnailDictionary[img as keyof IthumbnailDictionary]})`}}></div>: <div></div>
    return returnImage
}

export default projectThumbnailMap