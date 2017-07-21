import React, {Component} from "react";
import { Picker, Text, StyleSheet, Alert } from "react-native";
import { Card, CardSection, Input, Button } from "./Common"
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../Actions/EmployeeActions";
import { IEmployeeFormReducer } from "../Reducers/EmployeeFormReducer";
import { ActionCreatorsMapObject } from "redux";
import { IAction } from "../Reducers/index";

interface StateProps {
  name: string;
  phone: string;
  shift: string;
};
interface DispatchProps extends ActionCreatorsMapObject {
  employeeUpdate: ({prop, value}:  {prop: string, value: any}) => IAction
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
          <CardSection> 
              <Input
                label="Name"
                placeholder="Jane"
                value={this.props.name}
                onChangeText={value => this.props.employeeUpdate({ prop: "name", value })}
              />             
          </CardSection>
          <CardSection>    
              <Input
                label="Phone"
                placeholder="(21) 99999-9999"
                value={this.props.phone}
                onChangeText={value => this.props.employeeUpdate({ prop: "phone", value })}
              />            
          </CardSection>
          <CardSection style={{ flexDirection: "column"}}>
            <Text style={styles.pickerTextStyle}>Shift</Text>
            <Picker
              selectedValue={this.props.shift}
              onValueChange={value => this.props.employeeUpdate({prop: "shift", value})}
            >
              <Picker.Item label="Monday" value="Monday"/>
              <Picker.Item label="Tuesday" value="Tuesday"/>
              <Picker.Item label="Wednesday" value="Wednesday"/>
              <Picker.Item label="Thursday" value="Thursday"/>
              <Picker.Item label="Friday" value="Friday"/>
              <Picker.Item label="Saturday" value="Saturday"/>
              <Picker.Item label="Sunday" value="Sunday"/>
            </Picker>
          </CardSection>
          <CardSection>
              <Button onPress={this.onButtonPress.bind(this)}>
                  Save
              </Button>
          </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
});

const mapStateToProps = ({employeeForm}: {employeeForm: IEmployeeFormReducer}): StateProps => {
  const {name, phone, shift} = employeeForm;
  return {
    name,
    phone,
    shift
  };
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);
