import {GatheringInfo} from '../util/interfaces';

const SET_FILTERS = 'gathering/SET_FILTERS' as const;
const SET_GATHERING_LIST = 'gathering/SET_GATHERING_LIST' as const;
const SET_SELECTED_GATHERING = 'gathering/SET_SELECTED_GATHERING' as const;

export const setFilters = (arg: string[])=> ({ 
    type : SET_FILTERS,
    payload : arg
});
export const setGatheringList = (arg: GatheringInfo[])=> ({ 
    type : SET_GATHERING_LIST,
    payload : arg
});
export const setSelectedGathering = (arg: GatheringInfo | null)=> ({ 
    type : SET_SELECTED_GATHERING,
    payload : arg
});

type actionType = 
    | ReturnType<typeof setFilters>
    | ReturnType<typeof setGatheringList>
    | ReturnType<typeof setSelectedGathering>

type stateType = {
    filters: string[]
    gatheringList: GatheringInfo[]
    selectedGathering: GatheringInfo | null
}

const initState: stateType = {
    filters: ['한 번 만남', '비대면', '온라인', '오프라인', '지역', '성비 균등', '다락방 주최'],
    selectedGathering: null,
    gatheringList: [
        {
            id: '1',
            filter: ['한 번 만남'],
            title: ['신규 팀', '인기 팀'],
            bookmark: true,
            imgUrl: '/sample.png',
            name: '다락방',
            likes: 562,
            hates: 45,
            description: '사이클링 번개',
            interests: '취미 > 스포츠 > 자전거',
            nextActiveDate: '202110300800',
            applyTo: '10.20',
            closeSoon: 'Y',
            place: '연남동',
            people: 3,
            boy: 1,
            girl: 2,
            currBoy: 0,
            currGirl: 1,
            initDate: '20211010',
            lastActiveDate: '20211025',
            currentTeam: 6,
            participants: 600,
            averageAge: 28,
            boyRate: 35,
            girlRate: 65,
            payYn: 'N',
            membershipFee: 10000,
            activeDateList: ['202110300800','202110310800','202111010800','202111020800'],
            purpose: '사이클링을 너무 사랑하는 사람으로서 많은 분들이 사이클링의 매력을 아셨으면 하는 바람입니다.',
            subImgUrls: ['/sample4.png','/sample5.png'],
            detailDescription: `저희는 활동을 가능한 자주 오픈하고 있습니다.
                                많은 인원이 모이지 않더라도 충분합니다.
                                실력 차이에 대한 부담을 더실 수 있도록 정규 팀원의 체급도 다양하게 모집 중입니다.

                                • 저희는 분당의 탄천부터 여의도 한강 공원 까지의 코스를 주로 달립니다.
                                • 처음부터 함께하셔도 되고 사시는 곳과 가까운 지역에서 합류하셔도 됩니다.

                                화이팅 아자아자~!`
        },
        {
            id: '2',
            filter: ['비대면'],
            title: [],
            bookmark: true,
            imgUrl: '/sample2.png',
            name: '다락방',
            likes: 562,
            hates: 45,
            description: '비대면 독서 펜팔',
            interests: '취미 > 독서 > 비대면',
            nextActiveDate: '202110300800',
            applyTo: '10.20',
            closeSoon: 'N',
            place: '연남동',
            people: 0,
            boy: 0,
            girl: 0,
            initDate: '20211010',
            lastActiveDate: '20211025',
            currentTeam: 6,
            participants: 600,
            averageAge: 28,
            boyRate: 35,
            girlRate: 65,
            payYn: 'N',
            membershipFee: 10000,
            activeDateList: ['202110300800','202110310800','202111010800','202111020800'],
            purpose: '사이클링을 너무 사랑하는 사람으로서 많은 분들이 사이클링의 매력을 아셨으면 하는 바람입니다.',
            subImgUrls: ['/sample4.png','/sample5.png'],
            detailDescription: `저희는 활동을 가능한 자주 오픈하고 있습니다.
                                많은 인원이 모이지 않더라도 충분합니다.
                                실력 차이에 대한 부담을 더실 수 있도록 정규 팀원의 체급도 다양하게 모집 중입니다.

                                • 저희는 분당의 탄천부터 여의도 한강 공원 까지의 코스를 주로 달립니다.
                                • 처음부터 함께하셔도 되고 사시는 곳과 가까운 지역에서 합류하셔도 됩니다.

                                화이팅 아자아자~!`
        },
        {
            id: '3',
            filter: ['온라인'],
            title: [],
            bookmark: true,
            imgUrl: '/sample3.png',
            name: '다락방',
            likes: 562,
            hates: 45,
            description: '독서 모임 북토크',
            interests: '취미 > 독서 > 대면',
            nextActiveDate: '202110300800',
            applyTo: '10.20',
            closeSoon: 'N',
            place: '연남동',
            people: 5,
            boy: 0,
            girl: 5,
            initDate: '20211010',
            lastActiveDate: '20211025',
            currentTeam: 6,
            participants: 600,
            averageAge: 28,
            boyRate: 35,
            girlRate: 65,
            payYn: 'N',
            membershipFee: 10000,
            activeDateList: ['202110300800','202110310800','202111010800','202111020800'],
            purpose: '사이클링을 너무 사랑하는 사람으로서 많은 분들이 사이클링의 매력을 아셨으면 하는 바람입니다.',
            subImgUrls: ['/sample4.png','/sample5.png'],
            detailDescription: `저희는 활동을 가능한 자주 오픈하고 있습니다.
                                많은 인원이 모이지 않더라도 충분합니다.
                                실력 차이에 대한 부담을 더실 수 있도록 정규 팀원의 체급도 다양하게 모집 중입니다.

                                • 저희는 분당의 탄천부터 여의도 한강 공원 까지의 코스를 주로 달립니다.
                                • 처음부터 함께하셔도 되고 사시는 곳과 가까운 지역에서 합류하셔도 됩니다.

                                화이팅 아자아자~!`
        },
        {
            id: '4',
            filter: ['한 번 만남'],
            title: [],
            bookmark: true,
            imgUrl: '/sample.png',
            name: '다락방',
            likes: 562,
            hates: 45,
            description: '사이클링 번개',
            interests: '취미 > 스포츠 > 자전거',
            nextActiveDate: '202110300800',
            applyTo: '10.20',
            closeSoon: 'N',
            place: '연남동',
            people: 3,
            boy: 0,
            girl: 0,
            initDate: '20211010',
            lastActiveDate: '20211025',
            currentTeam: 6,
            participants: 600,
            averageAge: 28,
            boyRate: 35,
            girlRate: 65,
            payYn: 'N',
            membershipFee: 10000,
            activeDateList: ['202110300800','202110310800','202111010800','202111020800'],
            purpose: '사이클링을 너무 사랑하는 사람으로서 많은 분들이 사이클링의 매력을 아셨으면 하는 바람입니다.',
            subImgUrls: ['/sample4.png','/sample5.png'],
            detailDescription: `저희는 활동을 가능한 자주 오픈하고 있습니다.
                                많은 인원이 모이지 않더라도 충분합니다.
                                실력 차이에 대한 부담을 더실 수 있도록 정규 팀원의 체급도 다양하게 모집 중입니다.

                                • 저희는 분당의 탄천부터 여의도 한강 공원 까지의 코스를 주로 달립니다.
                                • 처음부터 함께하셔도 되고 사시는 곳과 가까운 지역에서 합류하셔도 됩니다.

                                화이팅 아자아자~!`
        },
        {
            id: '5',
            filter: ['비대면'],
            title: [],
            bookmark: true,
            imgUrl: '/sample2.png',
            name: '다락방',
            likes: 562,
            hates: 45,
            description: '비대면 독서 펜팔',
            interests: '취미 > 독서 > 비대면',
            nextActiveDate: '202110300800',
            applyTo: '10.20',
            closeSoon: 'N',
            place: '연남동',
            people: 3,
            boy: 1,
            girl: 2,
            initDate: '20211010',
            lastActiveDate: '20211025',
            currentTeam: 6,
            participants: 600,
            averageAge: 28,
            boyRate: 35,
            girlRate: 65,
            payYn: 'N',
            membershipFee: 10000,
            activeDateList: ['202110300800','202110310800','202111010800','202111020800'],
            purpose: '사이클링을 너무 사랑하는 사람으로서 많은 분들이 사이클링의 매력을 아셨으면 하는 바람입니다.',
            subImgUrls: ['/sample4.png','/sample5.png'],
            detailDescription: `저희는 활동을 가능한 자주 오픈하고 있습니다.
                                많은 인원이 모이지 않더라도 충분합니다.
                                실력 차이에 대한 부담을 더실 수 있도록 정규 팀원의 체급도 다양하게 모집 중입니다.

                                • 저희는 분당의 탄천부터 여의도 한강 공원 까지의 코스를 주로 달립니다.
                                • 처음부터 함께하셔도 되고 사시는 곳과 가까운 지역에서 합류하셔도 됩니다.

                                화이팅 아자아자~!`
        },
        {
            id: '6',
            filter: ['온라인'],
            title: [],
            bookmark: true,
            imgUrl: '/sample3.png',
            name: '다락방',
            likes: 562,
            hates: 45,
            description: '독서 모임 북토크',
            interests: '취미 > 독서 > 대면',
            nextActiveDate: '202110300800',
            applyTo: '10.20',
            closeSoon: 'N',
            place: '연남동',
            people: 3,
            boy: 1,
            girl: 2,
            initDate: '20211010',
            lastActiveDate: '20211025',
            currentTeam: 6,
            participants: 600,
            averageAge: 28,
            boyRate: 35,
            girlRate: 65,
            payYn: 'N',
            membershipFee: 10000,
            activeDateList: ['202110300800','202110310800','202111010800','202111020800'],
            purpose: '사이클링을 너무 사랑하는 사람으로서 많은 분들이 사이클링의 매력을 아셨으면 하는 바람입니다.',
            subImgUrls: ['/sample4.png','/sample5.png'],
            detailDescription: `저희는 활동을 가능한 자주 오픈하고 있습니다.
                                많은 인원이 모이지 않더라도 충분합니다.
                                실력 차이에 대한 부담을 더실 수 있도록 정규 팀원의 체급도 다양하게 모집 중입니다.

                                • 저희는 분당의 탄천부터 여의도 한강 공원 까지의 코스를 주로 달립니다.
                                • 처음부터 함께하셔도 되고 사시는 곳과 가까운 지역에서 합류하셔도 됩니다.

                                화이팅 아자아자~!`
        },{
            id: '7',
            filter: ['한 번 만남'],
            title: [],
            bookmark: true,
            imgUrl: '/sample.png',
            name: '다락방',
            likes: 562,
            hates: 45,
            description: '사이클링 번개',
            interests: '취미 > 스포츠 > 자전거',
            nextActiveDate: '202110300800',
            applyTo: '10.20',
            closeSoon: 'N',
            place: '연남동',
            people: 3,
            boy: 1,
            girl: 2,
            initDate: '20211010',
            lastActiveDate: '20211025',
            currentTeam: 6,
            participants: 600,
            averageAge: 28,
            boyRate: 35,
            girlRate: 65,
            payYn: 'N',
            membershipFee: 10000,
            activeDateList: ['202110300800','202110310800','202111010800','202111020800'],
            purpose: '사이클링을 너무 사랑하는 사람으로서 많은 분들이 사이클링의 매력을 아셨으면 하는 바람입니다.',
            subImgUrls: ['/sample4.png','/sample5.png'],
            detailDescription: `저희는 활동을 가능한 자주 오픈하고 있습니다.
                                많은 인원이 모이지 않더라도 충분합니다.
                                실력 차이에 대한 부담을 더실 수 있도록 정규 팀원의 체급도 다양하게 모집 중입니다.

                                • 저희는 분당의 탄천부터 여의도 한강 공원 까지의 코스를 주로 달립니다.
                                • 처음부터 함께하셔도 되고 사시는 곳과 가까운 지역에서 합류하셔도 됩니다.

                                화이팅 아자아자~!`
        },
        {
            id: '8',
            filter: ['비대면'],
            title: [],
            bookmark: true,
            imgUrl: '/sample2.png',
            name: '다락방',
            likes: 562,
            hates: 45,
            description: '비대면 독서 펜팔',
            interests: '취미 > 독서 > 비대면',
            nextActiveDate: '202110300800',
            applyTo: '10.20',
            closeSoon: 'N',
            place: '연남동',
            people: 3,
            boy: 1,
            girl: 2,
            initDate: '20211010',
            lastActiveDate: '20211025',
            currentTeam: 6,
            participants: 600,
            averageAge: 28,
            boyRate: 35,
            girlRate: 65,
            payYn: 'N',
            membershipFee: 10000,
            activeDateList: ['202110300800','202110310800','202111010800','202111020800'],
            purpose: '사이클링을 너무 사랑하는 사람으로서 많은 분들이 사이클링의 매력을 아셨으면 하는 바람입니다.',
            subImgUrls: ['/sample4.png','/sample5.png'],
            detailDescription: `저희는 활동을 가능한 자주 오픈하고 있습니다.
                                많은 인원이 모이지 않더라도 충분합니다.
                                실력 차이에 대한 부담을 더실 수 있도록 정규 팀원의 체급도 다양하게 모집 중입니다.

                                • 저희는 분당의 탄천부터 여의도 한강 공원 까지의 코스를 주로 달립니다.
                                • 처음부터 함께하셔도 되고 사시는 곳과 가까운 지역에서 합류하셔도 됩니다.

                                화이팅 아자아자~!`
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
        case SET_SELECTED_GATHERING:
            if(!action.payload) {
                return {
                    ...state,
                    selectedGathering : null
                };
            }
            const {filter, title, activeDateList, subImgUrls} = action.payload
            return {
                ...state,
                selectedGathering: {
                    ...action.payload,
                    filter: filter.slice(),
                    title: title.slice(),
                    activeDateList: activeDateList.slice(),
                    subImgUrls: subImgUrls.slice(),
                }
            };
        default:
            return state;
  }
}

export default gathering;