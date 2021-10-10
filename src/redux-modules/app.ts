const DO_SOMETHING = 'app/DO_SOMETHING' as const;

export const doSomething = (arg: string)=> ({ 
    type : DO_SOMETHING,
    payload : arg
});

type actionType = 
    | ReturnType<typeof doSomething>

type stateType = {
    someValue: string
}

const initState: stateType = {
    someValue: ''
};

function app(state: stateType = initState, action: actionType) {
    switch (action.type) {
        case DO_SOMETHING:
            return {
                someValue: ''
            };
        default:
            return state;
  }
}

export default app;