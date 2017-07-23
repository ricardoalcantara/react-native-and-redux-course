import React, { Component } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";
import { Input, CardSection } from "./Common/index";
import { connect } from "react-redux";
import { employeeUpdate } from "../Actions/EmployeeActions";
import { IEmployeeFormReducer } from "../Reducers/EmployeeFormReducer";
import { ActionCreatorsMapObject } from "redux";
import { IAction } from "../Reducers/index";

interface StateProps {
  name: string;
  phone: string;
  shift: string;
  employee?: any;
};
interface DispatchProps extends ActionCreatorsMapObject {
  employeeUpdate: ({prop, value}:  {prop: string, value: any}) => IAction
};

type EmployeeFormProps = StateProps & DispatchProps


class EmployeeForm extends Component<EmployeeFormProps, {}> {
    render() {
        return (
            <View>
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
            </View>
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

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);