import {ConfirmMessageInfo, Notification} from '../util/interfaces';

const SET_BAKCGROUND_COLOR = 'app/SET_BAKCGROUND_COLOR' as const;

export const setBackgroundColor = (arg: string)=> ({ 
    type : SET_BAKCGROUND_COLOR,
    payload : arg
});

type actionType = 
    | ReturnType<typeof setBackgroundColor>

type stateType = {
    test: string
}

const initState: stateType = {
    test: ''
};

function myTeam(state: stateType = initState, action: actionType) {
    switch (action.type) {
        case SET_BAKCGROUND_COLOR:
            return {
                ...state,
                test: action.payload
            };
        default:
            return state;
  }
}

export default myTeam;