/**
 * Created by Amy on 2016-11-08.
 * 说明：登录成功后跳转的主页面--界面
 */
import React , { Component }from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    ToolbarAndroid,
    StyleSheet,
    Text
} from 'react-native';

import ImageSelect from '../lib/ImageSelect';
import ListViewDatas from '../lib/ListViewDatas';
import TabBar from '../lib/TabBar/TabBar';

import NavigationBarIcon from 'react-native-navbar';


export default class LoginSuccess extends Component {
    render() {

        const rightButtonConfig = {
            title: 'Next',
            handler: () => alert('hello!'),
        };
        const titleConfig = {
            title: '中科唯实',
            tintColor:'#fff',
        };
        const leftButton={
            title : 'Back',
            handler : () => alert('hello!'),
            style : {},
           // tintColor : '#E78170',
           // icon : '../img/icon/bak_normal.png'
        };
        return (

        <View style={{ flex: 1, }}>
            <NavigationBarIcon style={styles.narBarContainer}
                               title={titleConfig}/>
            {/*<NavigationBarIcon
             title={titleConfig}
             rightButton={rightButtonConfig}
             leftButton ={leftButton}
             />*/}

            <View style={styles.container}>
                <TabBar style={styles.content}>
                    <TabBar.Item
                        icon={require('../img/icon/home_normal.png')}
                        selectedIcon={require('../img/icon/home_hightlight.png')}
                        onPress={() => {
                            console.log("first onPress");
                        }}
                        title='首页'>
                        <View style={styles.text}>
                            <Text style={{fontSize: 18}}>Home</Text>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('../img/icon/camera_normal.png')}
                        selectedIcon={require('../img/icon/camera_hightlight.png')}
                        title='拍照识别'>
                        <ImageSelect/>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('../img/icon/history_normal.png')}
                        selectedIcon={require('../img/icon/history_hightlight.png')}
                        title='历史识别'>
                        <ListViewDatas/>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('../img/icon/user_normal.png')}
                        selectedIcon={require('../img/icon/user_hightlight.png')}
                        title='我'>
                        <View style={styles.text}>
                            <Text style={{fontSize: 18}}>Me</Text>
                        </View>
                    </TabBar.Item>
                </TabBar>
            </View>

        </View>


        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    content: {
        flex: 1,
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    narBarContainer: {
        backgroundColor: '#63B8FF',
    },
});





/*
export default class LoginSuccess extends React.Component {
    constructor(props){
        super(props);
        this.state = {};

    }
    //回到第一个页面去
    onJump(){
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
    //跳转到拍照界面
    onImageSelect(){
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name : 'ImageSelect',
                component : ImageSelect,
            });
        }
    }
    //跳转到历史识别结果列表
    onListViewDatas(){
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name : 'ListViewDatas',
                component : ListViewDatas,
            });
        }
    }
    render(){
        return (

            <View >
                <TouchableOpacity onPress = {this.onJump.bind(this)}>
                    <Text> 登录成功，点击返回登录页面 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {this.onImageSelect.bind(this)}>
                    <Text> 拍照识别 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {this.onListViewDatas.bind(this)}>
                    <Text> 历史识别 </Text>
                </TouchableOpacity>
            </View>


        );

    }

}*/
