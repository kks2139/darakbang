import {ConfirmMessageInfo} from '../util/interfaces';

const SET_BAKCGROUND_COLOR = 'app/SET_BAKCGROUND_COLOR' as const;
const TOGGLE_CONFIRM_MESSAGE = 'app/TOGGLE_CONFIRM_MESSAGE' as const;

export const setBackgroundColor = (arg: string)=> ({ 
    type : SET_BAKCGROUND_COLOR,
    payload : arg
});
export const toggleConfirmMessage = (arg: ConfirmMessageInfo)=> ({ 
    type : TOGGLE_CONFIRM_MESSAGE,
    payload : arg
});

type actionType = 
    | ReturnType<typeof setBackgroundColor>
    | ReturnType<typeof toggleConfirmMessage>

type stateType = {
    backgroundColor: string
    confirmMessageInfo: ConfirmMessageInfo
}

const initState: stateType = {
    backgroundColor: '',
    confirmMessageInfo: {
        show: false
    }
};

function app(state: stateType = initState, action: actionType) {
    switch (action.type) {
        case SET_BAKCGROUND_COLOR:
            return {
                ...state,
                backgroundColor: action.payload
            };
        case TOGGLE_CONFIRM_MESSAGE:
            return {
                ...state,
                confirmMessageInfo: {
                    ...action.payload
                }
            };
        default:
            return state;
  }
}

export default app;