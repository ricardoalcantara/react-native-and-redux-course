import _ from "lodash";
import React, {Component} from "react";
import { ListView, View, Text, StyleSheet, ListViewDataSource } from "react-native";
import { connect } from "react-redux";
import { employeesFetch } from "../Actions/EmployeeActions";
import { ActionCreatorsMapObject } from "redux";
import { IEmployeeReducer } from "../Reducers/EmployeeReducer";
import ListItem from "./ListItem";

interface StateProps {
  employees: any[],
};

interface IState {
  dataSource: ListViewDataSource
}

interface DispatchProps extends ActionCreatorsMapObject {
  employeesFetch: () => void
};

type EmployeeListProps = StateProps & DispatchProps

class EmployeeList extends Component<EmployeeListProps, IState> {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps: EmployeeListProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }: {employees: any[]}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.setState({
      dataSource: ds.cloneWithRows(employees)
    });
  }

  renderRow(employee: any) {
    return <ListItem employee={employee} />
  }

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = ({employees}: {employees: IEmployeeReducer}): StateProps => {
  const arrEmployees = _.map(employees, (val, uid) => {
    return {...val, uid};
  });
  // console.log(employees);
  return {
    employees: arrEmployees,
  };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
