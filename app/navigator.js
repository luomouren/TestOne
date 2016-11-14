/**
 * Created by Amy on 2016-11-08.
 * 导航器控制类。利用name，component 实现导航
 * （可以自己随便定义命名，只要后面的类中访问同样的命名即可，课参考LoginSuccess.js 中的返回功能）
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import Main from './ui/LoginMain';
export default class navigator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let defaultName = 'Main';
        let defaultComponent = Main;
        return (
            <Navigator
                initialRoute = {{name : defaultName , component: defaultComponent}}
                configureScene = {(route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route,navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator = {navigator} />
                }}
            />
        );
    }

};