/**
 * Created by Amy on 2016-11-08.
 * 说明：
 1.使用了线性布局，从上往下依次Image，EditView，LoginButton，Text
 2.EditView和LoginButton 为自定义控件，实现输入框，和按钮的封装。
 */
import React, { Component } from 'react';
import {
    ToolbarAndroid,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ToastAndroid,
    TouchableOpacity
} from 'react-native';
import EditView from '../lib/EditView';
import LoginButton from '../lib/LoginButton';
import LoginSuccess from '../ui/LoginSuccess';
import NetUitl from '../lib/NetUtil';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import Spinner from 'react-native-loading-spinner-overlay';

export default class LoginActivity extends Component {
    constructor(props) {
        super(props);
        this.userName = "";
        this.password = "";
        this.state = {
            loadingVisible: false
        };
    }

    render() {
        return (

            <View style={styles.style_main_view}>

                <Image style={styles.style_image} source={require('../img/touxiang.jpeg')}/>
                <TextInput
                    style={styles.style_user_input}
                    placeholder="账号"
                    numberOfLines={1}
                    autoFocus={true}
                    underlineColorAndroid={'transparent'}
                    textAlign="center"
                    onChangeText={(text) => {
                        this.userName = text;
                    }}
                />
                <View style={{height:1,backgroundColor:'#f4f4f4'}}/>
                <TextInput
                    style={styles.style_pwd_input}
                    placeholder="密码"
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}
                    textAlign="center"
                    onChangeText={(text) => {
                        this.password = text;
                    }}
                />
                <Spinner visible={this.state.loadingVisible} textContent={"登录中..."} textStyle={{color: '#FFF'}} />
                <LoginButton name='登录' onPressCallback={this.onPressCallback}/>
                <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',bottom:10}}>
                    <Text style={styles.style_view_unlogin}>无法登录?</Text>
                    <Text style={styles.style_view_register}>注册</Text>
                </View>

            </View>
        )
    }


    onPressCallback = () => {
        //账号、密码是否为空校验
        if(null==this.userName || ""==this.userName){
            ToastAndroid.show("账号不能为空!",ToastAndroid.LONG);
            return false;
        }
        if(null==this.password || ""==this.password){
            ToastAndroid.show("密码不能为空!",ToastAndroid.LONG);
            return false;
        }
        //将loading中visible的false修改为true
        this.setState({
            loadingVisible: !this.state.loadingVisible
        });

        //隐藏键盘
        dismissKeyboard();
        let formData = new FormData();
        formData.append("username",this.userName);
        formData.append("password",this.password);
        formData.append("uname","app-test");
        //let url = "http://172.16.0.236:8080/zt/login";
        //let url = "http://172.16.0.236:8080/SpringMVC-Demo/app/loginApp";
        let url = "http://192.16.100.209:8080/pwmana/user/app/login";
        //let url = "http://192.168.0.104:8080/pwmana/user/app/login";
        //let url = "http://172.16.0.236:8080/SSH01/user!reg";
        NetUitl.postUrlText(url,formData,(responseText) => {
            //拿到登录结果，停止转圈
            this.setState({
                loadingVisible: !this.state.loadingVisible
            });
            if("false"==responseText){
                ToastAndroid.show("账号或密码不对!",ToastAndroid.LONG);
            }else{
                this.onLoginSuccess();
            }
        })
    };

    //跳转到第二个页面去
    onLoginSuccess(){
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name : 'LoginSuccess',
                component : LoginSuccess,
            });
        }
    }

}


const styles = StyleSheet.create({
    style_main_view:{
        flex: 1,
        //paddingTop:50,
        backgroundColor: '#ffffff',
    },
    style_image: {
        borderRadius:35,
        height: 70,
        width:70,
        marginTop:40,
        alignSelf:'center',
    },
    style_user_input:{
        backgroundColor:'#fff',
        marginTop:10,
        height:40,
    },
    style_pwd_input:{
        backgroundColor:'#fff',
        height:40,
    },
    style_view_commit:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        height:35,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    style_view_unlogin:{
        fontSize:12,
        color:'#63B8FF',
        marginLeft:10,
    },
    style_view_register:{
        fontSize:12,
        color:'#63B8FF',
        marginRight:10,
        alignItems:'flex-end',
        flex:1,
        flexDirection:'row',
        textAlign:'right',
    }
});