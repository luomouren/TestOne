/**
 * 导航器组件实例
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableHighlight,
    Navigator,
} from 'react-native';

const Realm =require('realm');

class TestOne extends Component {
    render() {
        let realm = new Realm({
            schema:[{name:'Dog',properties:{name:'string'}}]
        });
        realm.write(()=>{
            realm.create('Dog',{name:'Rex'})
        });
        return (
            <View style={styles.container}>
                <Text style={styles.messageText}>
                    Dogs在Realm中的行数是:{realm.objects('Dog').length}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
   container:{
       flex:1,
   },
    messageText:{
        fontSize:17,
        fontWeight:'500',
        padding:15,
        marginTop:50,
        marginLeft:15,
    },
    button:{
        backgroundColor:'white',
        padding:15,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'#CDCDCD',
    }
});

AppRegistry.registerComponent('TestOne', () => TestOne);