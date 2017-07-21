import React, {Component} from "react";
import {Text, StyleSheet} from "react-native";
import {CardSection} from "./Common";

interface StateProps {
    employee: any
}

class ListItem extends Component<StateProps, {}> {
    render() {
        const { name } = this.props.employee;
        return (
            <CardSection>
                <Text style={styles.titleStyle}>
                    {name}
                </Text>
            </CardSection>
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