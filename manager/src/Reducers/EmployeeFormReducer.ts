import {
 EMPLOYEE_UPDATE,
 EMPLOYEE_CREATED
} from "../Actions/types"
import { IAction } from "./index";

export interface IEmployeeFormReducer {
    name: string;
    phone: string;
    shift: string;
}

const INITIAL_STATE: IEmployeeFormReducer = {
    name: "",
    phone: "",
    shift: "",
};

export default (state: IEmployeeFormReducer = INITIAL_STATE, action: IAction): IEmployeeFormReducer => {
    switch (action.type) {
        case EMPLOYEE_UPDATE: {
            return {...state, [action.payload.prop]: action.payload.value}
        }
        case EMPLOYEE_CREATED: {
            return INITIAL_STATE;
        }
        default:
            return state;
    }
}
