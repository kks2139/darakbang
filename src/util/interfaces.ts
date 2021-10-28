export interface GatheringInfo {
    id: string;
    filter: string[]
    title: string[]
    bookmark: boolean
    imgUrl: string
    name: string
    likes: number
    hates: number
    description: string
    interests: string
    nextActiveDate: string
    applyTo: string
    closeSoon: 'Y' | 'N'
    place: string
    people?: number
    boy?: number
    girl?: number
    currBoy?: number
    currGirl?: number
    initDate: string
    lastActiveDate: string
    currentTeam: number
    participants: number
    averageAge: number
    boyRate: number
    girlRate: number
    payYn: 'Y' | 'N'
    membershipFee: number
    activeDateList: string[]
    purpose: string
    subImgUrls: string[]
    detailDescription: string
}

export interface TeamInfo {

}

export interface ComboboxItem {
    label: string
    value: string
}