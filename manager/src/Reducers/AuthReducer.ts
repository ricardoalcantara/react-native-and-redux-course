import { Action, Reducer } from "redux";
import { IAction } from "./index";
import { EMAIL_CHANGED, PASSWORD_CHANGED } from "../Actions/types";

export interface IAuthReducer {
  email: string,
  password: string
}

const INITIAL_STATE: IAuthReducer = { email: "", password: "" };

const AuthReducer = (state: IAuthReducer = INITIAL_STATE, action: IAction): IAuthReducer => {
  switch(action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    default:
      return state;
  }
}

export default AuthReducer;