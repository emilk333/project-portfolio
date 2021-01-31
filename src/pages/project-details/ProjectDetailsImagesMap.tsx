import React from 'react'
import solarBase1 from '../../assets/images/solarbase/solarbase_img_3.png'
import solarBase2 from '../../assets/images/solarbase/solarbase_img_4.png'
import solarBase3 from '../../assets/images/solarbase/solarbase_img_2.png'

import moonshine1 from '../../assets/images/moonshine/furniture_img_1.png'
import moonshine2 from '../../assets/images/moonshine/furniture_img_2.png'
import moonshine3 from '../../assets/images/moonshine/furniture_img_3.png'
import moonshine4 from '../../assets/images/moonshine/furniture_img_4.png'
import moonshine5 from '../../assets/images/moonshine/furniture_img_5.png'
import moonshine6 from '../../assets/images/moonshine/furniture_img_6.png'
import moonshine7 from '../../assets/images/moonshine/furniture_img_7.png'
import moonshine8 from '../../assets/images/moonshine/furniture_img_8.png'
import moonshine9 from '../../assets/images/moonshine/furniture_img_9.png'

import futurenow1 from '../../assets/images/futurenow/futurenow-bg-1.png'
import futurenow2 from '../../assets/images/futurenow/futurenow-image-2.png'
import futurenow3 from '../../assets/images/futurenow/futurenow-image-3.png'

import vip1 from '../../assets/images/vip/vip-image-1.png'
import vip2 from '../../assets/images/vip/vip-image-2.png'
import vip3 from '../../assets/images/vip/vip-image-3.png'
import vip4 from '../../assets/images/vip/vip-image-4.png'

import todo1 from '../../assets/images/todo/todo_all_mockup.png'

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
    futurenow1: string,
    futurenow2: string,
    futurenow3: string,
    vip1: string,
    vip2: string,
    vip3: string,
    vip4: string,
    todo1: string,
}

const projectDetailsImageMap = ({ img }: any): JSX.Element => {
    if (!img) return <div></div>
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
        futurenow1: futurenow1,
        futurenow2: futurenow2,
        futurenow3: futurenow3,
        vip1: vip1,
        vip2: vip2,
        vip3: vip3,
        vip4: vip4,
        todo1: todo1,
    }   

    img ? returnImage = <motion.img src={imageDictionary[img as keyof IimageDictionary]} alt={`${imageDictionary[img as keyof IimageDictionary]}`} className="pf-project-details__project-image"></motion.img>
                        : <div></div>
    return returnImage
}

export default projectDetailsImageMap