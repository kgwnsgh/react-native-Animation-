import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Button} from 'react-native';
import Easing from 'react-native/Libraries/Animated/Easing';

class AnimTwo extends Component {
  constructor() {
    super();
    this.state = {
      redSquare: new Animated.Value(1),
      greenSquare: new Animated.ValueXY(0, 0),
      blueSquare: new Animated.ValueXY(0, 0),
    };
  }

  runAnimation = () => {
    Animated.sequence([
      // 애니메이션 순차재생
      Animated.timing(this.state.redSquare, {
        toValue: 0,
      }),

      Animated.parallel([
        // 내부에 있는 애니메이션은 동시에 실행
        Animated.timing(this.state.greenSquare, {
          toValue: {x: 200, y: 0},
        }),
        Animated.timing(this.state.blueSquare, {
          toValue: {x: 200, y: 400},
        }),
      ]),
    ]).start();
  };

  render() {
    return (
      <View>
        <Animated.View style={{opacity: this.state.redSquare}}>
          <View style={styles.redSquare}></View>
        </Animated.View>

        <Animated.View style={this.state.greenSquare.getLayout()}>
          <View style={styles.greenSquare}></View>
        </Animated.View>

        <Animated.View style={this.state.blueSquare.getLayout()}>
          <View style={styles.blueSquare}></View>
        </Animated.View>

        <Button title="Animation Start" onPress={this.runAnimation} />

        <Button
          title="Check the console"
          onPress={() => console.log('button tuoch')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  redSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  greenSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  blueSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
});

export default AnimTwo;
