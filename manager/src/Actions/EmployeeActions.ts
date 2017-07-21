import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { Dispatch } from "redux";

import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATED,
    EMPLOYEES_FETCH_SUCCESS
} from "./types";
import { IAction } from "../Reducers/index";


export const employeeUpdate = ( {prop, value}:  {prop: string, value: any} ): IAction => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
};


export const employeeCreate = ({name, phone, shift}:  {name: string, phone: string, shift: string}): (dispatch: Dispatch<IAction>) => void => {
    const { currentUser } = firebase.auth();
    return ((dispatch: Dispatch<IAction>) => {
        firebase
        .database()
        .ref(`/users/${currentUser.uid}/employees`)
        .push({name, phone, shift})
        .then(() => {
            dispatch({ type: EMPLOYEE_CREATED})
            Actions.employeeList({type: "reset"})
        });
    });
}

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch: Dispatch<IAction>) => {
        firebase
        .database()
        .ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshop => {
            dispatch({
                type: EMPLOYEES_FETCH_SUCCESS,
                payload: snapshop.val()
            });
        });
        
    }
}