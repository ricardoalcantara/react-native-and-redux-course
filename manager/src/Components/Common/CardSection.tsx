import _ from "lodash";
import React, {Component} from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface ICardSection {
  style?: {};
}

declare type CardSectionProps = ICardSection & React.Props<undefined>

const CardSection = (props: CardSectionProps) => {
  const style: any = _.merge(styles.containerStyle, props.style);

  const {containerStyle} = StyleSheet.create({
    containerStyle: style
  });
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: { 
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative",
  }
};

export { CardSection };