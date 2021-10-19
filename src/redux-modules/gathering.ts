import {GatheringInfo} from '../util/interfaces';

const SET_FILTERS = 'gathering/SET_FILTERS' as const;
const SET_GATHERING_LIST = 'gathering/SET_GATHERING_LIST' as const;

export const setFilters = (arg: string[])=> ({ 
    type : SET_FILTERS,
    payload : arg
});
export const setGatheringList = (arg: GatheringInfo[])=> ({ 
    type : SET_GATHERING_LIST,
    payload : arg
});

type actionType = 
    | ReturnType<typeof setFilters>
    | ReturnType<typeof setGatheringList>

type stateType = {
    filters: string[]
    gatheringList: GatheringInfo[]
}

const initState: stateType = {
    filters: ['한 번 만남', '비대면', '온라인', '오프라인', '지역', '성비 균등', '다락방 주최'],
    gatheringList: [
        {
            id: '1',
            filter: ['한 번 만남'],
            title: ['신규 팀', '인기 팀'],
            bookmark: true,
            imgUrl: 'sample.png',
            name: '다락방',
            likes: 562,
            description: '사이클링 번개',
            interests: '취미 > 스포츠 > 자전거',
            applyFrom: '10월 30일 8 : 00 AM',
            applyTo: '10.20',
            place: '연남동',
            people: 3,
            boy: 1,
            girl: 2
        },
        {
            id: '2',
            filter: ['비대면'],
            title: [],
            bookmark: true,
            imgUrl: 'sample2.png',
            name: '다락방',
            likes: 562,
            description: '비대면 독서 펜팔',
            interests: '취미 > 독서 > 비대면',
            applyFrom: '10월 30일 8 : 00 AM',
            applyTo: '10.20',
            place: '연남동',
            people: 0,
            boy: 0,
            girl: 0
        },
        {
            id: '3',
            filter: ['온라인'],
            title: [],
            bookmark: true,
            imgUrl: 'sample3.png',
            name: '다락방',
            likes: 562,
            description: '독서 모임 북토크',
            interests: '취미 > 독서 > 대면',
            applyFrom: '10월 30일 8 : 00 AM',
            applyTo: '10.20',
            place: '연남동',
            people: 5,
            boy: 0,
            girl: 5
        },
        {
            id: '4',
            filter: ['한 번 만남'],
            title: [],
            bookmark: true,
            imgUrl: 'sample.png',
            name: '다락방',
            likes: 562,
            description: '사이클링 번개',
            interests: '취미 > 스포츠 > 자전거',
            applyFrom: '10월 30일 8 : 00 AM',
            applyTo: '10.20',
            place: '연남동',
            people: 3,
            boy: 0,
            girl: 0
        },
        {
            id: '5',
            filter: ['비대면'],
            title: [],
            bookmark: true,
            imgUrl: 'sample2.png',
            name: '다락방',
            likes: 562,
            description: '비대면 독서 펜팔',
            interests: '취미 > 독서 > 비대면',
            applyFrom: '10월 30일 8 : 00 AM',
            applyTo: '10.20',
            place: '연남동',
            people: 3,
            boy: 1,
            girl: 2
        },
        {
            id: '6',
            filter: ['온라인'],
            title: [],
            bookmark: true,
            imgUrl: 'sample3.png',
            name: '다락방',
            likes: 562,
            description: '독서 모임 북토크',
            interests: '취미 > 독서 > 대면',
            applyFrom: '10월 30일 8 : 00 AM',
            applyTo: '10.20',
            place: '연남동',
            people: 3,
            boy: 1,
            girl: 2
        },{
            id: '7',
            filter: ['한 번 만남'],
            title: [],
            bookmark: true,
            imgUrl: 'sample.png',
            name: '다락방',
            likes: 562,
            description: '사이클링 번개',
            interests: '취미 > 스포츠 > 자전거',
            applyFrom: '10월 30일 8 : 00 AM',
            applyTo: '10.20',
            place: '연남동',
            people: 3,
            boy: 1,
            girl: 2
        },
        {
            id: '8',
            filter: ['비대면'],
            title: [],
            bookmark: true,
            imgUrl: 'sample2.png',
            name: '다락방',
            likes: 562,
            description: '비대면 독서 펜팔',
            interests: '취미 > 독서 > 비대면',
            applyFrom: '10월 30일 8 : 00 AM',
            applyTo: '10.20',
            place: '연남동',
            people: 3,
            boy: 1,
            girl: 2
        },
    ]
};

function gathering(state: stateType = initState, action: actionType) {
    switch (action.type) {
        case SET_FILTERS:
            return {
                ...state,
                filters: action.payload.slice()
            };
        case SET_GATHERING_LIST:
            return {
                ...state,
                gatheringList: action.payload.map(d => ({...d}))
            };
        default:
            return state;
  }
}

export default gathering;