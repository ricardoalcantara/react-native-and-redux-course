import { Action, Reducer } from "redux";
import { IAction } from "./index";
import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "../Actions/types";
import { User } from "firebase";

export interface IAuthReducer {
  email: string,
  password: string,
  user?: User,
  error?: string,
  loading: boolean
}

const INITIAL_STATE: IAuthReducer = { email: "", password: "", user: null, error: null, loading: false };

const AuthReducer = (state: IAuthReducer = INITIAL_STATE, action: IAction): IAuthReducer => {
  console.log(action);
  switch(action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case LOGIN_USER: 
      return {...state, loading: true, error: ""};
    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload};
    case LOGIN_USER_FAIL:
      return {...state, error: "Authentication Failed.", password: "", loading: false };
    default:
      return state;
  }
}

export default AuthReducer;