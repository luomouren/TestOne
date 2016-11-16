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
    View,
    ViewPagerAndroid,
} from 'react-native';

export default class TestOne extends Component {
    render() {
        return (
           <View>
               <Text>
                   ViewPagerAndroid基础实例Demo
               </Text>
               <ViewPagerAndroid style={styles.pageStyle}>
                   <View style={{backgroundColor:"red"}}>
                       <Text>First Page!</Text>
                   </View>
                   <View style={{backgroundColor:'yellow'}}>
                       <Text>Second Page!</Text>
                   </View>
               </ViewPagerAndroid>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    pageStyle: {
        height:200,
        padding:20,
        alignItems:'center',
    },
    content:{
        margin:10,
        backgroundColor:'#ff0000',
    }

});
AppRegistry.registerComponent('TestOne', () => TestOne);
