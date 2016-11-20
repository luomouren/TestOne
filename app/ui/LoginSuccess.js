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
import HistoryDatas from '../lib/HistoryDatas';

import NavigationBarIcon from 'react-native-navbar';
import TabBar from 'react-native-xtabbar';

export default class LoginSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        //NavBar
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
            {/*NavBar*/}
            <NavigationBarIcon style={styles.narBarContainer}
                               title={titleConfig}/>

            <View style={styles.container}>
                <TabBar style={styles.content}
                        onItemSelected={(index) => {console.log(`current item's index is ${index}`);}}>
                    <TabBar.Item
                        icon={require('../img/icon/home_normal.png')}
                        selectedIcon={require('../img/icon/home_hightlight.png')}
                        onPress={() => {
                            console.log("first onPress--home");
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
                        <ImageSelect  {...this.props} />
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('../img/icon/history_normal.png')}
                        selectedIcon={require('../img/icon/history_hightlight.png')}
                        title='历史识别'>
                        <HistoryDatas  {...this.props} />
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
