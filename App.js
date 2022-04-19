import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, Dimensions} from 'react-native';
import AnimOne from './src/Animation01';
import AnimTwo from './src/Animation02';
import Supertext from './src/utis/supertext';

class App extends Component {
  checkSupport = () => {
    if (Platform.Os === 'ios') {
      if (Platform.Version < 13.4) {
        return false;
      }
    } else {
      if (Platform.Version < 27) {
        return true;
      }
    }
  };
  render() {
    console.warn(Dimensions.get('screen'));
    console.warn(Dimensions.get('window'));
    //console.warn(Platform.Version); // 버전을 표시
    return (
      <View style={styles.constainer}>
        {/* <AnimOne /> */}
        {/* <AnimTwo /> */}
        {this.checkSupport() ? (
          <Supertext style={styles.div}>
            {/* from App.js */}
            {Platform.OS === 'ios'
              ? 'This is my iOS Phone'
              : 'This is my Android Phone'}
          </Supertext>
        ) : (
          <Text>sorry. Your phone is not being supported by the app.</Text>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    paddingTop: 50,
  },
  div: {
    ...Platform.select({
      ios: {
        backgroundColor: 'yellow',
      },
      android: {
        backgroundColor: 'red',
      },
    }),
  },
});

export default App;
