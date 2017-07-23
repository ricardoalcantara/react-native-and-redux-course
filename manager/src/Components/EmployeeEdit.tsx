import _ from "lodash";
import React, {Component} from "react";
import { StyleSheet } from "react-native";
import { Card, CardSection, Button, Confirm } from "./Common"
import { connect } from "react-redux";
import { employeeUpdate, employeeEdit, employeesDelete } from "../Actions/EmployeeActions";
import { IEmployeeFormReducer } from "../Reducers/EmployeeFormReducer";
import { ActionCreatorsMapObject } from "redux";
import { IAction } from "../Reducers/index";
import EmployeeForm from "./EmployeeForm";
import Communications from "react-native-communications";

interface StateProps {
  name: string;
  phone: string;
  shift: string;
};

interface IProps {
  employee: any;
};

interface DispatchProps extends ActionCreatorsMapObject {
  employeeUpdate: ({prop, value}:  {prop: string, value: any}) => IAction
  employeeEdit: ({name, phone, shift, uid}:  {name: string, phone: string, shift: string, uid: string}) => () => void
};

type EmployeeEditProps = StateProps & IProps & DispatchProps

class EmployeeEdit extends Component<EmployeeEditProps, {}> {
  state = { showModal: false}
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value})
    })
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;
    this.props.employeeEdit({name, phone, shift: shift || "Monday", uid: this.props.employee.uid});
  }

  onTextPress() {
    const {phone, shift} = this.props;
    Communications.text(phone, `Your upcoming shift in on ${shift}`);
  }

  onAccept() {
    this.props.employeesDelete(this.props.employee.uid)
  }

  onDecline() {
    this.setState({showModal: false})
  }

  render() {
    return (
      <Card>
          <EmployeeForm />
          <CardSection>
              <Button onPress={this.onButtonPress.bind(this)}>
                  Save Changes
              </Button>
          </CardSection>
          <CardSection>
              <Button onPress={this.onTextPress.bind(this)}>
                  Text Schedule
              </Button>
          </CardSection>
          <CardSection>
              <Button onPress={() => {this.setState({showModal: true})}}>
                  Fire Employee
              </Button>
          </CardSection>

          <Confirm
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
            visible={this.state.showModal}
          >
            Are you sure you want to delete this?
          </Confirm>
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

export default connect(mapStateToProps, {employeeUpdate, employeeEdit, employeesDelete})(EmployeeEdit);
