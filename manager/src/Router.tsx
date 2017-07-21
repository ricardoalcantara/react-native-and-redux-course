import React from "react";
import { Actions, Scene, Router } from "react-native-router-flux";
import LoginForm from "./Components/LoginForm";
import EmployeeList from "./Components/EmployeeList";
import EmployeeCreate from "./Components/EmployeeCreate";

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" />
            </Scene>
            <Scene key="main">
                <Scene
                    onRight={() => Actions.employeeCreate() }
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    initial={true}
                />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
            </Scene>
        </Router>
    )
};

export default RouterComponent;
