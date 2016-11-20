/*
* 20161115  Amy
* 用于展示拍照识别结果
* */
import React, {
    Component,
} from 'react';

import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    ListView,
    PixelRatio,
} from 'react-native';
import NavigationBarIcon from 'react-native-navbar';

export default class ImageResult extends React.Component {
    //初始化参数，以防参数没有从上一个页面传过来
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            dataSource: null,
            avatarSource:null,
        }
    }
    componentDidMount() {
        //这里获取从上一个js传递过来的参数
        this.setState({
            loaded: this.props.loaded,
            dataSource: this.props.dataSource,
            avatarSource:this.props.avatarSource,
        });
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }


        //NavBar
        const titleConfig = {
            title: '拍照识别结果',
            tintColor:'#fff',
        };


        const leftButton={
            title : 'Back',
            handler : () => this.props.navigator.pop(),
            style : {},
            tintColor:'#fff',
            // tintColor : '#E78170',
            // icon : '../img/icon/bak_normal.png'
        };

        return (
            <View style={{ flex: 1, }}>
                {/*NavBar*/}
                <NavigationBarIcon style={styles.narBarContainer}
                                   title={titleConfig} leftButton={leftButton}/>

                <View style={styles.listView}>

                    <View style={styles.container}>
                        { this.state.avatarSource === null ? <Text>选择图片</Text> :
                            <Image style={styles.avatar} source={this.state.avatarSource} />
                        }
                        <View style={styles.rightContainer}>

                            <Text style={styles.title}>车牌号：{this.state.dataSource.carNo}</Text>
                            <Text style={styles.filed}>车牌颜色：{this.state.dataSource.numberColor}</Text>
                            <Text style={styles.filed}>车型：{this.state.dataSource.carType}</Text>
                            <Text style={styles.filed}>车身颜色：{this.state.dataSource.color}</Text>
                        </View>
                    </View>
                </View>
            </View>

        );
    }

    renderLoadingView()
    {
        return (<View style={styles.container} >
                <Text>加载中......</Text>
            </View>

        );
    }
};


var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    filed: {
        textAlign: 'center',
    },
    listView: {
        paddingTop: 20,
        paddingLeft: 20,
        backgroundColor: '#F5FCFF',
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        //borderRadius: 90,
        width: 106,
        height: 162,
    },
    narBarContainer: {
        backgroundColor: '#63B8FF',
    },
});
