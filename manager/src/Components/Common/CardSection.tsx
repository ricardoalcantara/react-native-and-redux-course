import React, {Component} from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface ICardSection {
  style?: any;
}

declare type CardSectionProps = ICardSection & React.Props<undefined>

const CardSection = (props: CardSectionProps) => {
  const {containerStyle} = StyleSheet.create({
    containerStyle: {...styles.containerStyle, ...(props.style ? props.style :  {})}
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