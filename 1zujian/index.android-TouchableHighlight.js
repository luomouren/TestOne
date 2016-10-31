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
    TouchableHighlight,
} from 'react-native';

export default class TestOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    TouchableHighlight实例
                </Text>
                <TouchableHighlight activeOpacity={0.5} underlayColor="rgb(210,230,255)"
                style={{borderRadius:8,padding:6,marginTop:5}}>
                    <Text style={{fontSize:16}}>点击我</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },

});

AppRegistry.registerComponent('TestOne', () => TestOne);
