import { combineReducers } from "redux";
import app from './app';
import gathering from "./gathering";
import makeTeam from "./makeTeam";
import myTeam from "./myTeam";

const rootReducer = combineReducers({
    app,
    gathering,
    makeTeam,
    myTeam
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
