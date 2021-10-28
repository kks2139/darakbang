const SET_BAKCGROUND_COLOR = 'app/SET_BAKCGROUND_COLOR' as const;

export const setBackgroundColor = (arg: string)=> ({ 
    type : SET_BAKCGROUND_COLOR,
    payload : arg
});

type actionType = 
    | ReturnType<typeof setBackgroundColor>

type stateType = {
    backgroundColor: string
}

const initState: stateType = {
    backgroundColor: ''
};

function app(state: stateType = initState, action: actionType) {
    switch (action.type) {
        case SET_BAKCGROUND_COLOR:
            return {
                ...state,
                backgroundColor: action.payload
            };
        default:
            return state;
  }
}

export default app;