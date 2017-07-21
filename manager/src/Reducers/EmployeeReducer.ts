import {
 EMPLOYEES_FETCH_SUCCESS,
} from "../Actions/types"
import { IAction } from "./index";

export interface IEmployeeReducer {
    [prop: string]: any;
}

const INITIAL_STATE: IEmployeeReducer = {
};

export default (state: IEmployeeReducer = INITIAL_STATE, action: IAction): IEmployeeReducer => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS: {
            return action.payload;
        }
        default:
            return state;
    }
}
