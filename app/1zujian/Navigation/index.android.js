import React from 'react';
import {
    StyleSheet,
    View,
    Navigator,
    AppRegistry
} from 'react-native';
import FirstPageComponent from './FirstPageComponent';

export default class TestOne extends React.Component {
    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = FirstPageComponent;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                //页面之间跳转时候的动画
                configureScene={(route) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                }}
                renderScene={(route, navigator) => {
                    //route里其实就是我们传递的name,component这两个货，
                    // navigator是一个Navigator的对象，为什么呢，因为它有push pop jump...等方法，这是我们等下用来跳转页面用的那个navigator对象。
                    let Component = route.component;
                    //这个语法是把 routes.params 里的每个key作为props的一个属性，在下个页面即可用this. props.id调用
                    //navigator对象在导航容器跳转时一直存在
                    return <Component {...route.params} navigator={navigator} />
                    //这里有一个判断，也就是如果传递进来的component存在，那我们就是返回一个这个component，
                    // 结合前面 initialRoute 的参数，我们就是知道，这是一个会被render出来给用户看到的component，然后navigator作为props传递给了这个component。
                }}
            />
        );
    }
}
AppRegistry.registerComponent('TestOne', () => TestOne);