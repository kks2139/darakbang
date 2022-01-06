import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MyTeam, TeamDetail, Member} from '../util/interfaces';

type stateType = {
    myTeamList: MyTeam[]
    selectedTeamRoom: TeamDetail
    memberList: Member[]
}

const initialState: stateType = {
    myTeamList: [
        {id: 1, teamName: '다락방', category: '일반 > 취업 > 디자이너', joinDate: '20211212', joinCount: 30},
        {id: 2, teamName: '정원방', category: '일반 > 커리어 > 사이드프로젝트', joinDate: '20210608', joinCount: 5},
        {id: 3, teamName: '혜원방', category: '일반 > 취업 > 개발자', joinDate: '20210812', joinCount: 15},
        {id: 4, teamName: '광선방', category: '일반 > 취업 > 개발자', joinDate: '20210812', joinCount: 1},
    ],
    selectedTeamRoom: {
        id: 1,
        teamName: '다락방',
        category: '일반 > 취업 > 디자이너',
        joinDate: '20211212',
        joinCount: 30,
        lastActive: '20211111',
        isMember: true,
        boys: 2,
        girls: 8,
        averageAge: 27,
        activeNum: 33,
        totalJoinNum: 300,
        good: 240,
        bad: 240,
        reviewKeyWord: ['친절한','편안한','친구같은','자주만만','다재다능','솔직한'],
        activeHistory: [
            {times: 1, title: '다락방과 함께 재미있는 프로젝트 해볼 사람들~', place: '강남', date: '202111110700'},
            {times: 2, title: '다락방과 함께 재미있는 프로젝트 해볼 사람들~', place: '강남', date: '202111160700'},
            {times: 3, title: '다락방과 함께 재미있는 프로젝트 해볼 사람들~', place: '강남', date: '202111160700'},
        ]
    },
    memberList: [
        {isLeader: true, nickname: '주인장', avatar: '', activePeriod: 1, joinCount: 15, tag: '이장님'},
        {isLeader: false, nickname: '팀원1', avatar: '', activePeriod: 15, joinCount: 15, tag: ''},
        {isLeader: false, nickname: '팀원2', avatar: '', activePeriod: 8, joinCount: 15, tag: ''},
        {isLeader: false, nickname: '팀원3', avatar: '', activePeriod: 1, joinCount: 15, tag: ''},
        {isLeader: false, nickname: '팀원4', avatar: '', activePeriod: 1, joinCount: 15, tag: ''},
        {isLeader: false, nickname: '팀원5', avatar: '', activePeriod: 1, joinCount: 15, tag: ''},
        {isLeader: false, nickname: '팀원6', avatar: '', activePeriod: 1, joinCount: 15, tag: ''},
    ]
}

const myTeamSlice = createSlice({
    name: 'myTeam',
    initialState,
    reducers: {
        setMyTeamList: (state, action: PayloadAction<MyTeam[]>)=>{
            state.myTeamList = action.payload
        },
    }
});

export const myTeamActions = myTeamSlice.actions;
export default myTeamSlice.reducer;