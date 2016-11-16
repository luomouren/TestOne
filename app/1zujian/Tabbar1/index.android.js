import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import Tabbar from './Tabbar'

class App extends Component {
    render() {
        return (
            <Tabbar activeColor={'red'}>
                <Tabbar.Item
                    title={"小"}
                    icon={{uri:'http://www.iconpng.com/png/inkalligraphic_icon/126-smiley.png'}}
                    activeIcon={{uri:'http://www.iconpng.com/png/inkalligraphic_icon/426-smiley.png'}}
                >
                    <View style={{backgroundColor:'#F00',flex:1}}></View>
                </Tabbar.Item>
                <Tabbar.Item
                    title={"小"}
                    icon={{uri:'http://www.iconpng.com/png/inkalligraphic_icon/223-smiley-sad.png'}}
                >
                    <View style={{backgroundColor:'#0F0',flex:1}}></View>
                </Tabbar.Item>
                <Tabbar.Item
                    title={"小"}
                    icon={{uri:'http://www.iconpng.com/png/font_awesome/f119.png'}}
                    activeIcon={{uri:'http://www.iconpng.com/png/font_awesome/f118.png'}}
                >
                    <View style={{backgroundColor:'#00F',flex:1}}></View>
                </Tabbar.Item>
                <Tabbar.Item
                    title={"小"}
                    icon={{uri:'http://www.iconpng.com/png/brankic1979/sad.png'}}
                    activeIcon={{uri:'http://www.iconpng.com/png/brankic1979/smiley.png'}}
                >
                    <View style={{backgroundColor:'#FFF',flex:1}}></View>
                </Tabbar.Item>
            </Tabbar>
        );
    }
}

AppRegistry.registerComponent('TestOne', () => App);

