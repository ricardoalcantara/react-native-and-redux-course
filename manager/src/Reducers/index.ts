import { combineReducers, Action } from "redux";
import AuthReducer, {IAuthReducer} from "./AuthReducer";

export interface IAction extends Action {
  payload?: any
}

export interface ICombinedReducers {
  auth: IAuthReducer
}

export default combineReducers<ICombinedReducers>({
  auth: AuthReducer
});
