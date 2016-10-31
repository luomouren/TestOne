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
    Image,
    View,
    ViewPagerAndroid,
} from 'react-native';

var titles_first_data = ["美食","电影","酒店","KTV","外卖","优惠买单","周边游","休闲娱乐","今日新单","丽人"];
var titles_second_data = ["购物","火车票","生活服务","旅游","汽车服务","足疗按摩","小吃快餐","景点门票","境外游","全部分类"];

var TestOne =React.createClass({
//export default class TestOne extends Component {
    getInitialState: function(){
        return {
            page:1,
        };
    },
    onPageSelected:function(e){
        this.setState({page:1+e.nativeEvent.position});
    },
    render() {
        return (
            <View>
                <Text style={{textAlign:'center'}}>
                    美团首页顶部效果实例
                </Text>
                <ViewPagerAndroid style={styles.pageStyle} initialPage={0} onPageSelected={this.onPageSelected}>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_first_data[0]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_first_data[1]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_first_data[2]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_first_data[3]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_first_data[4]}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:10}}>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_first_data[5]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_first_data[6]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_first_data[7]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_first_data[8]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_first_data[9]}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_second_data[0]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_second_data[1]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_second_data[2]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_second_data[3]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_second_data[4]}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:10}}>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_second_data[5]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_second_data[6]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_second_data[7]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_second_data[8]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/touxiang.jpeg')} style={styles.imageStyle}></Image>
                                <Text style={styles.textStyle}>{titles_second_data[9]}</Text>
                            </View>
                        </View>
                    </View>
                </ViewPagerAndroid>
                <Text style={{flex:1,alignSelf:'center'}}>当前第{this.state.page}页</Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    pageStyle: {
        marginTop:20,
        alignItems:'center',
        height:150,
    },
    textStyle:{
        marginTop:5,
        alignSelf:'center',
        fontSize:11,
        color:'#555555',
        textAlign:'center',
    },
    imageStyle:{
        alignSelf:'center',
        width:45,
        height:45,
    },
});

AppRegistry.registerComponent('TestOne', () => TestOne);
