import {MyTeam} from '../util/interfaces';

const SET_MY_TEAM_LIST = 'app/SET_MY_TEAM_LIST' as const;

export const setMyTeamList = (arg: MyTeam[])=> ({ 
    type : SET_MY_TEAM_LIST,
    payload : arg
});

type actionType = 
    | ReturnType<typeof setMyTeamList>

type stateType = {
    myTeamList: MyTeam[]
}

const initState: stateType = {
    myTeamList: [
        {id: 1, teamName: '다락방', category: '일반 > 취업 > 디자이너', joinDate: '20211212', joinCount: 30},
        {id: 2, teamName: '정원방', category: '일반 > 커리어 > 사이드프로젝트', joinDate: '20210608', joinCount: 5},
        {id: 3, teamName: '혜원방', category: '일반 > 취업 > 개발자', joinDate: '20210812', joinCount: 15},
        {id: 4, teamName: '광선방', category: '일반 > 취업 > 개발자', joinDate: '20210812', joinCount: 1},
    ]
};

function myTeam(state: stateType = initState, action: actionType) {
    switch (action.type) {
        case SET_MY_TEAM_LIST:
            return {
                ...state,
                myTeamList: action.payload.slice()
            };
        default:
            return state;
  }
}

export default myTeam;