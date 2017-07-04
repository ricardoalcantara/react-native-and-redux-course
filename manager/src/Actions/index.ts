import {EMAIL_CHANGED} from "./types"
import {IAction} from "../Reducers";

export const emailChanged = (text: string): IAction => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
}