import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AnimOne from './src/Animation01';
import AnimTwo from './src/Animation02';

class App extends Component {
  render() {
    return (
      <View style={styles.constainer}>
        {/* <AnimOne /> */}
        <AnimTwo />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});

export default App;
