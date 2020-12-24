
interface IPortfolioItems {
    direction: number,
    titel : string,
    id : string,
    thumbnail : string,
    type : string,
    year : string,
    association : string,
    synopsis: string,
    tools: []
}

interface IToolsAndSkillsSVG {
    svg : string,
    name : string
}


interface IPortfolioProject {
    direction: number,
    title : string,
    id : string,
    thumbnail : string,
    type : string,
    year : string,
    association : string,
    synopsis: string,
    tools: Array<IToolsAndSkillsSVG>
}

export { IPortfolioItems }
export { IPortfolioProject }