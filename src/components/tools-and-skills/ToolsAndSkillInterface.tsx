
interface IToolsAndSkill {
    title : string
    content : [
        {
            svg : string,
            name: string
        }
    ]
}

interface IlinkConfig {
    value : string,
    url?: string
}

export { IToolsAndSkill, IlinkConfig }