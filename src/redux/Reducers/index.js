import { combineReducers} from "redux";
import { UsersReducer} from "./UserReducer";

export const Reducers = combineReducers ({
    adduser:UsersReducer
});