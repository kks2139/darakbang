import {TeamInfo, TeamLeaderInfo} from '../util/interfaces';

const SET_TEAM_INFO = 'makeTeam/SET_TEAM_INFO' as const;
const SET_TEAMLEADER_INFO = 'makeTeam/SET_TEAMLEADER_INFO' as const;

export const setTeamInfo = (arg: TeamInfo | null)=> ({ 
    type : SET_TEAM_INFO,
    payload : arg
});
export const setTeamLeaderInfo = (arg: TeamLeaderInfo)=> ({ 
    type : SET_TEAMLEADER_INFO,
    payload : arg
});

type actionType = 
    | ReturnType<typeof setTeamInfo>
    | ReturnType<typeof setTeamLeaderInfo>

type stateType = {
    teamInfo: TeamInfo | null
    teamLeaderInfo: TeamLeaderInfo
}

const initState: stateType = {
    teamInfo: {
        teamName: '',
        category: '',
        purpose: '',
        filter_1: '',
        filter_2: '',
        filter_3: '',
        career: '',
        wordCount: 0,
    },
    teamLeaderInfo: {
        career: '',
        nickName: '',
        gender: '',
        propensity: '',
    }
};

function makeTeam(state: stateType = initState, action: actionType) {
    switch (action.type) {
        case SET_TEAM_INFO:
            return {
                ...state,
                teamInfo: action.payload ? {
                    ...action.payload
                } : null
            };
        case SET_TEAMLEADER_INFO:
            return {
                ...state,
                teamLeaderInfo: {
                    ...action.payload
                }
            };
        default:
            return state;
  }
}

export default makeTeam;