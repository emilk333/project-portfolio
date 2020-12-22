import React from 'react'
import adobeXD from '../../assets/images/adobeXD.png'
import adobePS from '../../assets/images/adobePS.png'
import react from '../../assets/images/react.png'
import sass from '../../assets/images/sass.png'
import vue from '../../assets/images/vue.png'
import webpack from '../../assets/images/webpack.png'
import zeplin from '../../assets/images/zeplin.png'
import javascript from '../../assets/images/javascript.png'

interface IsvgDictionary {
    adobeXD : string,
    adobePS : string,
    react : string,
    sass : string,
    vue : string,
    webpack : string, 
    zeplin : string,
    javascript : string
}

const ToolsAndSkillSVGGenerator = ( svg: any ) : JSX.Element => {

    let returnImage : JSX.Element
    const svgDictionary : IsvgDictionary = {
        adobeXD : adobeXD,
        adobePS : adobePS,
        react : react,
        sass : sass,
        vue : vue,
        webpack : webpack,
        zeplin : zeplin,
        javascript : javascript
    }

    svg ? returnImage = <img className="pf-tools-and-skills__icon-img" src={`${svgDictionary[svg.svg as keyof IsvgDictionary]}`}/> : <div></div>
    return returnImage
}

export default ToolsAndSkillSVGGenerator