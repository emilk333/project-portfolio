import React from 'react'
import solarBase1 from '../../assets/images/solarbase_img_3.png'
import solarBase2 from '../../assets/images/solarbase_img_4.png'
import solarBase3 from '../../assets/images/solarbase_img_2.png'

import moonshine1 from '../../assets/images/furniture_img_1.png'
import moonshine2 from '../../assets/images/furniture_img_2.png'
import moonshine3 from '../../assets/images/furniture_img_3.png'
import moonshine4 from '../../assets/images/furniture_img_4.png'
import moonshine5 from '../../assets/images/furniture_img_5.png'
import moonshine6 from '../../assets/images/furniture_img_6.png'
import moonshine7 from '../../assets/images/furniture_img_7.png'
import moonshine8 from '../../assets/images/furniture_img_8.png'
import moonshine9 from '../../assets/images/furniture_img_9.png'

import LazyLoad from 'react-lazyload'
import {motion} from 'framer-motion'

interface IimageDictionary {
    solarBase1: string,
    solarBase2: string,
    solarBase3: string,
    moonshine1: string,
    moonshine2: string,
    moonshine3: string,
    moonshine4: string,
    moonshine5: string,
    moonshine6: string,
    moonshine7: string,
    moonshine8: string,
    moonshine9: string,

}

const projectDetailsImageMap = ({ img }: any): JSX.Element => {
    
    let returnImage: JSX.Element

    const imageDictionary: IimageDictionary = {
        solarBase1: solarBase1,
        solarBase2: solarBase2,
        solarBase3: solarBase3,
        moonshine1: moonshine1,
        moonshine2: moonshine2,
        moonshine3: moonshine3,
        moonshine4: moonshine4,
        moonshine5: moonshine5,
        moonshine6: moonshine6,
        moonshine7: moonshine7,
        moonshine8: moonshine8,
        moonshine9: moonshine9,
    }   

    img ? returnImage = <LazyLoad height={200}><motion.img src={imageDictionary[img as keyof IimageDictionary]} alt={`${imageDictionary[img as keyof IimageDictionary]}`} className="pf-project-details__project-image"></motion.img>
                        </LazyLoad> : <div></div>
    return returnImage
}

export default projectDetailsImageMap