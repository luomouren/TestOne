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
    ScrollView,
} from 'react-native';

export default class TestOne extends Component {
    render() {
        return (
           <View style={styles.container}>
                <Text>
                    进行测试ScrollView控件
                </Text>
               <ScrollView showVerticalScrollIndicator={true}
                        contentContainerStyle={styles.content}>
                   <Text style={{color:'#FFF', margin:5,fontSize:16,backgroundColor:'blue'}}>
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                       测试ScrollView控件
                   </Text>
               </ScrollView>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:400,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },
    content:{
        margin:10,
        backgroundColor:'#ff0000',
    }

});

AppRegistry.registerComponent('TestOne', () => TestOne);
