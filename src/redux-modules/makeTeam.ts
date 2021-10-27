import {TeamInfo} from '../util/interfaces';

const SET_TEAM_INFO = 'makeTeam/SET_TEAM_INFO' as const;

export const setTeamInfo = (arg: TeamInfo | null)=> ({ 
    type : SET_TEAM_INFO,
    payload : arg
});

type actionType = 
    | ReturnType<typeof setTeamInfo>

type stateType = {
    teamInfo: TeamInfo | null
}

const initState: stateType = {
    teamInfo: null
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
        default:
            return state;
  }
}

export default makeTeam;