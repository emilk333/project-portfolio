
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


interface IPortfolioProject {
    direction: number,
    title : string,
    id : string,
    thumbnail : string,
    type : string,
    year : string,
    association : string,
    synopsis: string,
    tools: [
        {
            svg : string,
            name : string
        }
    ]
}

export { IPortfolioItems }
export { IPortfolioProject }