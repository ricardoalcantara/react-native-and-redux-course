import React, {Component} from "react";
import { Card, CardSection, Button } from "./Common"
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../Actions/EmployeeActions";
import { IEmployeeFormReducer } from "../Reducers/EmployeeFormReducer";
import { ActionCreatorsMapObject } from "redux";
import { IAction } from "../Reducers/index";
import EmployeeForm from "./EmployeeForm";

interface StateProps {
  name: string;
  phone: string;
  shift: string;
};
interface DispatchProps extends ActionCreatorsMapObject {
  employeeCreate: ({name, phone, shift}:  {name: string, phone: string, shift: string}) => () => void
};

type EmployeeCreateProps = StateProps & DispatchProps

class EmployeeCreate extends Component<EmployeeCreateProps, {}> {
  onButtonPress() {
    const {name, phone, shift} = this.props;
    this.props.employeeCreate({name, phone, shift: shift || "Monday"});
  }

  render() {
    return (
      <Card>
          <EmployeeForm />
          <CardSection>
              <Button onPress={this.onButtonPress.bind(this)}>
                  Save
              </Button>
          </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({employeeForm}: {employeeForm: IEmployeeFormReducer}): StateProps => {
  const {name, phone, shift} = employeeForm;
  return {
    name,
    phone,
    shift
  };
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);
