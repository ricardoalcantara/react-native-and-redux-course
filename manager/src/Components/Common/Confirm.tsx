import React, {Component} from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, Modal } from "react-native";
import { CardSection } from "./CardSection";
import { Button } from "./Button";

interface IConfirm {
  onAccept?: () => void;
  onDecline?: () => void;
  visible?: boolean;
}

declare type ConfirmProps = IConfirm & React.Props<any>

const Confirm = (props: ConfirmProps) => {
  const { children, onAccept, onDecline, visible } = props;
  const { cardSectionStyle, textStyle, containerStyle} = styles;
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={() => {}}
      transparent={true}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: "center",
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    flex: 1,
    position: "relative",
    justifyContent: "center",
  }
})

export { Confirm };