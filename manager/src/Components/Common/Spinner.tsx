import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

interface ISpinner {
  size?: number | "small" | "large"
};

const Spinner = ({ size }: ISpinner) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || "large"} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Spinner };
