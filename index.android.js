/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class TestOne extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.part1]}>
          <Text style={[styles.font15]}>测试本地图片</Text>
          <Image source={require('./img/4.2.png')}  style={{width:200, height:100}}/>
        </View>
        <View style={[styles.part2]}>
          <Text style={[styles.font15]}>测试网络图片</Text>
          <Image source={{uri:'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg'}}  style={{width:200, height:100}}>
            <Text style={[styles.font30]}>背景</Text>
          </Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    flexDirection:'row',
  },
  part1: {
    height: 160,
    flex:1,
    borderWidth:1,
    borderColor:'red',
  },
  part2: {
    height: 160,
    flex:2,
    borderWidth:1,
    borderColor:'red',
  },
  part2: {
    height: 160,
    flex:2,
    borderWidth:1,
    borderColor:'red',
  },
  font30:{
    fontSize:30,
  },
  font15:{
    fontSize:15,
  },
});

AppRegistry.registerComponent('TestOne', () => TestOne);
