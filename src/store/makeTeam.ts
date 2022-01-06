import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TeamInfo, TeamLeaderInfo} from '../util/interfaces';

type stateType = {
    teamInfo: TeamInfo
    teamLeaderInfo: TeamLeaderInfo
}

const initialState: stateType = {
    teamInfo: {
        teamName: '',
        category: '',
        purpose: '',
        filter_1: '',
        filter_2: '',
        filter_3: '',
    },
    teamLeaderInfo: {
        career: '',
        nickname: '주인장',
        gender: '남',
        propensity: '',
        propensityList: [
            '교회오빠','교회언니','이장님','이모님','복학생'
            ,'쎈언니','나익기 알바생','미치광이 과학자'
            ,'러씨 알바생','올영 알바생','수련회 교관'
        ],
    }
}

const makeTeamSlice = createSlice({
    name: 'makeTeam',
    initialState,
    reducers: {
        setTeamInfo: (state, action: PayloadAction<TeamInfo>)=>{
            state.teamInfo = action.payload
        },
        setTeamLeaderInfo: (state, action: PayloadAction<TeamLeaderInfo>)=>{
            state.teamLeaderInfo = action.payload
        },
    }
});

export const makeTeamActions = makeTeamSlice.actions;
export default makeTeamSlice.reducer;