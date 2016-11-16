'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    ListView,
} from 'react-native';

var  TestOne=React.createClass({
    getInitialState :function(){
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        return {
            dataSource:ds.cloneWithRows(['row 1','row 2','row 3','row 4','row 5','row 6','row 7','row 8']),
        };
    },
    render() {
        return (
            <ListView dataSource={this.state.dataSource} renderRow={(rowData)=> <Text>{rowData}</Text>}></ListView>
        );
    }
})

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },

});

AppRegistry.registerComponent('TestOne', () => TestOne);
