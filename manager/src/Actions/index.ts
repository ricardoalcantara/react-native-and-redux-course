import {EMAIL_CHANGED, PASSWORD_CHANGED} from "./types"
import {IAction} from "../Reducers";

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