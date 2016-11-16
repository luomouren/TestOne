/**
 * Created by Amy on 2016-11-08.
 * 说明：登录成功后跳转的界面
 */
import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    ToolbarAndroid,
    Text
} from 'react-native';

import ImageSelect from '../lib/ImageSelect';
import ListViewDatas from '../lib/ListViewDatas';

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

}