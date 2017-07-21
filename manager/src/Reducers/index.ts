import { combineReducers, Action } from "redux";
import AuthReducer, {IAuthReducer} from "./AuthReducer";
import EmployeeFormReducer, {IEmployeeFormReducer} from "./EmployeeFormReducer";
import EmployeeReducer, {IEmployeeReducer} from "./EmployeeReducer";

export interface IAction extends Action {
  payload?: any
}

export interface ICombinedReducers {
  auth: IAuthReducer
  employeeForm: IEmployeeFormReducer
  employees: IEmployeeFormReducer
}

export default combineReducers<ICombinedReducers>({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});
