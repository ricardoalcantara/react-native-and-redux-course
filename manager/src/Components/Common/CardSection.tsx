import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';

declare type CardSectionProps = React.Props<undefined>

const CardSection = (props: CardSectionProps) => {
  const {containerStyle} = styles;
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: { 
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  }
});

export { CardSection };