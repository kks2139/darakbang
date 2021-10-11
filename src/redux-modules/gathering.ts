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
            id: 'testid',
            filter: '한 번 만남',
            bookmark: true,
            imgUrl: 'sample.png',
            name: '다락방',
            likes: 562,
            description: '사이클링 번개 팀원 모집',
            interests: '취미 > 스포츠',
            period: '10.10 ~ 10.20 까지 모집',
            place: '연남동'
        }
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