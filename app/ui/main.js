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
    TouchableOpacity
} from 'react-native';
import EditView from '../lib/EditView';
import LoginButton from '../lib/LoginButton';
import LoginSuccess from '../ui/LoginSuccess';
import NetUitl from '../lib/NetUtil';
export default class LoginActivity extends Component {
    constructor(props) {
        super(props);
        this.userName = "";
        this.password = "";
    }

    render() {
        return (

            <View style={LoginStyles.loginview}>
                <View   style={{flexDirection: 'row',height:100,marginTop:1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',}}>
                    <Image style={styles.style_image} source={require('../img/touxiang.jpeg')}/>
                </View>
                <View style={{marginTop:80}}>
                    <EditView  name='输入用户名/注册手机号' onChangeText={(text) => {
                        this.userName = text;
                    }}/>
                    <EditView name='输入密码' secureTextEntry={true} onChangeText={(text) => {
                        this.password = text;
                    }}/>

                   {/* <TextInput
                        style={styles.style_user_input}
                        placeholder="QQ号/手机号/邮箱"
                        numberOfLines={1}
                        autoFocus={true}
                        underlineColorAndroid={'transparent'}
                        textAlign="center"
                    />
                    <View style={{height:1,backgroundColor:'#f4f4f4'}}/>
                    <TextInput
                        style={styles.style_pwd_input}
                        placeholder="密码"
                        numberOfLines={1}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true}
                        textAlign="center"
                    />*/}


                    <LoginButton name='登录' onPressCallback={this.onPressCallback}/>
                    <Text style={{color:"#4A90E2",textAlign:'center',marginTop:10}} >忘记密码？</Text>
                </View>
            </View>
        )
    }


    onPressCallback = () => {
        let formData = new FormData();
        formData.append("username",this.userName);
        formData.append("password",this.password);
        console.info(formData);
        //http://172.16.0.236:8080/zt?username=admin&password=12345678&formLoginHome=true
        //let url = "http://192.168.0.103:8080/zt?formLoginHome=true&password=amin12";
        //let url = "http://192.168.0.103:8080/spring-mvc/items/queryItems.html";
        let url = "http://172.16.0.236:8080/spring-mvc/items/queryItems.html";
        NetUitl.postJson(url,formData,(responseText) => {
            alert(responseText);
            this.onLoginSuccess();
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

class loginLineView extends Component {
    render() {
        return (
            <Text >
                没有帐号
            </Text>
        );
    }
}

const LoginStyles = StyleSheet.create({
    loginview: {
        flex: 1,
        padding: 30,
        backgroundColor: '#ffffff',
    },
});


const styles = StyleSheet.create({
    style_image: {
        borderRadius:35,
        height: 70,
        width:70,
       // marginTop:40,
        marginBottom:10,
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
});