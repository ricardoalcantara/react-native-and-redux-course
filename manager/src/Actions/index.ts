import firebase from "firebase";

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "./types"
import {IAction} from "../Reducers";
import { Dispatch } from "redux";

export const emailChanged = (text: string): IAction => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
}

export const passwordChanged = (text: string): IAction => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
}

export const loginUser = ({email, password}: {email: string, password: string}) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch({type: LOGIN_USER});
    firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => createUser({email, password})(dispatch));
  }
}

const createUser = ({email, password}: {email: string, password: string}) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch({type: LOGIN_USER});
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => loginUserFail(dispatch));
  }
}

const loginUserSuccess = (dispatch: Dispatch<IAction>, user: any) => {
    dispatch({type: LOGIN_USER_SUCCESS, payload: user});
}

const loginUserFail = (dispatch: Dispatch<IAction>) => {
    dispatch({type: LOGIN_USER_FAIL});
}