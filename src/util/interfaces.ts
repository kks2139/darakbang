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
    teamName: string
    category: string
    purpose: string
    filter_1: string
    filter_2: string
    filter_3: string
}

export interface SelectedCombo {
    label: string
    value: string | number
    name: string
}

export interface TeamLeaderInfo {
    career: string
    nickname: string
    gender: string
    propensity: string
    propensityList: string[]
}

export interface ConfirmMessageInfo {
    title?: string
    subTitle?: string
    msg?: string
    confirmText?: string
    show?: boolean
    confirmCallback?: ()=> void
}

export interface Notification {
    id: number
    title: string
    content: string
    checked: boolean
    isSecret: boolean
    receivedDate: string // 20211119131030 -> yyyy MM dd HH mm ss
    category?: string
    place?: string
    // 기타 필요한거 추가
}

export interface Constraint {
    [key: string]: undefined | string | number | boolean | string[] | JSX.Element | ActiveHistory | ActiveHistory[]
}

export interface MyTeam  extends Constraint{
    id: number
    teamName: string
    category: string
    joinDate: string
    joinCount: number
}

export interface TeamDetail extends MyTeam {
    id: number
    isMember: boolean // 이 팀에 가입한 멤버인지 여부
    lastActive: string
    boys: number
    girls: number
    averageAge: number
    activeNum: number
    totalJoinNum: number
    good: number
    bad: number
    reviewKeyWord: string[]
    activeHistory: ActiveHistory[]
    // 기타 등등..
}

export interface ActiveHistory extends Constraint {
    times: number
    title: string
    place: string
    date: string
}

export interface Member extends Constraint{
    isLeader: boolean
    nickname: string
    avatar: string
    activePeriod: number // ~년차
    joinCount: number
    tag?: string
    el?: JSX.Element
}

export interface ChattingMessage {
    userId: string
    userName: string
    message: string
    avatar?: string // img url
    time: string // yyyyMMddHHmmss
}

export interface ComboboxItem {
    label: string
    value: string | number
}

export interface ChattingScheduleInputs extends Constraint {
    isOnline: boolean
    fee: number
    place: string
    description: string
    isFree: boolean
    month?: number
    date?: number
    time?: number
}

export interface LoginInput {
    id: string
    pw: string
    memoId: boolean
}

export interface ToastMessage {
    text: string
    show: boolean
}

export interface Popup {
    children?: JSX.Element | JSX.Element[]
    show: boolean
}