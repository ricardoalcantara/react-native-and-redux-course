import React, {Component} from "react";
import {Text, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {CardSection} from "./Common";
import { Actions } from "react-native-router-flux";

interface StateProps {
    employee: any
}

class ListItem extends Component<StateProps, {}> {

    OnRowPress() {
        Actions.employeeEdit({employee: this.props.employee});
    }

    render() {
        const { name } = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.OnRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

export default ListItem;