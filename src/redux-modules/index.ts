import { combineReducers } from "redux";
import app from './app';
import gathering from "./gathering";
import makeTeam from "./makeTeam";

const rootReducer = combineReducers({
    app,
    gathering,
    makeTeam,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
