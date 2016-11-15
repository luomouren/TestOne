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
} from 'react-native';
export default class ImageResult extends React.Component {
    //初始化参数，以防参数没有从上一个页面传过来
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            dataSource: null,
        }
    }
    componentDidMount() {
        alert(this.props.loaded);
        console.log("ImageResult.js==",this.props.dataSource);
        //这里获取从上一个js传递过来的参数
        this.setState({
            loaded: this.props.loaded,
            dataSource: this.props.dataSource,
        });
    }
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <View style={styles.container}>
                {/*<Image
                 source={{uri: movie.posters.thumbnail}}
                 style={styles.thumbnail}
                 />*/}
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>车牌号：{this.state.dataSource.carNo}</Text>
                    <Text style={styles.year}>车牌颜色：{this.state.dataSource.numberColor}</Text>
                    <Text style={styles.year}>车型：{this.state.dataSource.carType}</Text>
                    <Text style={styles.year}>车身颜色：{this.state.dataSource.color}</Text>
                </View>
            </View>

            /*<ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />*/
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
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});
