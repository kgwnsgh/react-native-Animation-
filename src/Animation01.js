import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated, Button} from 'react-native';
import Easing from 'react-native/Libraries/Animated/Easing';

class AnimOne extends Component {
  constructor() {
    super();
    this.state = {
      mySquare: new Animated.Value(1),
    };
  }

  runAnimation = () => {
    Animated.timing(this.state.mySquare, {
      toValue: 0,
      duration: 2000, // 화면에 표시까지 걸리는 시간
      delay: 500, // 실행전에 대기시간
      // easing: Easing.elastic(3), // 액션 종류
    }).start();
  };

  render() {
    return (
      <View>
        <Animated.View
          style={{
            opacity: this.state.mySquare,
            transform: [
              {
                rotateX: this.state.mySquare.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '180deg', '360deg'],
                }),
              },
              {
                translateX: this.state.mySquare.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [300, 190, 0],
                }),
              },
            ],
            // top: this.state.mySquare.interpolate({
            //   inputRange: [0, 1], // input은 항상 작은값부터 큰값 순서로 넣어주어야한다
            //   outputRange: [700, 0],
            // }),
          }}
          // style={this.state.mySquare.getLayout()}
          // style={{ left: this.mySquare.x, top: this.mySquare.y }}
        >
          <View style={styles.square}></View>
        </Animated.View>
        <Animated.Text
          style={{
            fontSize: this.state.mySquare.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [40, 30, 20],
            }),
            color: this.state.mySquare.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: ['red', 'green', 'blue'],
            }),
          }}>
          <Text>Animation Effect</Text>
        </Animated.Text>

        <Button title="Animation Start" onPress={this.runAnimation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
});

export default AnimOne;
