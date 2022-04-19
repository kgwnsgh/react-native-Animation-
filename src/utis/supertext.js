import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const supertext = props => {
  return (
    <Text
      //   {...props} style={styles.container}
      style={[styles.container, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    fontSize: 25,
    color: 'blue',
    padding: 15,
    width: 300,
  },
});

export default supertext;
