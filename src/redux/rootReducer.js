import {combineReducers} from "redux";
import {postReducer} from "./reducers/postReducer";
import {authReducer} from "./reducers/authReducer"
export const rootReducer = combineReducers({
    posts: postReducer,
    auth:authReducer
});