import { combineReducers } from "redux";
import app from './app';
import gathering from "./gathering";

const rootReducer = combineReducers({
    app,
    gathering,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
