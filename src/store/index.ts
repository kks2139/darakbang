import { configureStore, AsyncThunkOptions } from "@reduxjs/toolkit";
import appReducer from './app';
import gatheringReducer from "./gathering";
import makeTeamReducer from "./makeTeam";
import myTeamReducer from "./myTeam";

import {appActions} from './app';

const store = configureStore({
    reducer: {
        app: appReducer,
        gathering: gatheringReducer,
        makeTeam: makeTeamReducer,
        myTeam: myTeamReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        thunk: {
            extraArgument: appActions.addToastMessage,
        },
        serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;