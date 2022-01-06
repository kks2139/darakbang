import { configureStore } from "@reduxjs/toolkit";
import appReducer from './app';
import gatheringReducer from "./gathering";
import makeTeamReducer from "./makeTeam";
import myTeamReducer from "./myTeam";

const store = configureStore({
    reducer: {
        app: appReducer,
        gathering: gatheringReducer,
        makeTeam: makeTeamReducer,
        myTeam: myTeamReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;