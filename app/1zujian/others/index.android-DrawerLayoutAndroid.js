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
  View,
  DrawerLayoutAndroid,
} from 'react-native';

export default class TestOne extends Component {
  render() {
    var navigationView = (
        <View style={{flex:1,backgroundColor:'blue'}}>
            <Text style={[styles.style_function_title]}>导航标题栏</Text>
            <Text style={[styles.style_function]}>功能1</Text>
            <Text style={[styles.style_function]}>功能2</Text>
        </View>
    );
    return (
        <DrawerLayoutAndroid
            drawerWidth={150}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView} >
            <View style={{flex:1,alignItems:'center'}}>
                <Text style={{margin:10,fontSize:15,textAlign:'right'}}>这里是主界面</Text>
            </View>
        </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  style_function: {
      marginTop:10,
      marginLeft:20,
      color:'#fff',
      fontSize:15,
      textAlign:'left',
  },
  style_function_title:{
      margin:10,
      color:'#fff',
      fontSize:15,
      textAlign:'center',
  }

});
AppRegistry.registerComponent('TestOne', () => TestOne);
