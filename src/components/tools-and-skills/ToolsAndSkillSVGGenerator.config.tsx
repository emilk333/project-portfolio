import React from 'react'

const ToolsAndSkillSVGGenerator = ({props}:any) => {
    const svgDictionary = {
        adobeXD: "",
        adobePhotoshop: "",
        react: "",
        designThinking: "",
    }

    return (
        <div>
            {svgDictionary[props]}
        </div>
    )
}

export default ToolsAndSkillSVGGenerator