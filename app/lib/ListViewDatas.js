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
import NetUitl from './NetUtil';

export default class ListViewDatas extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    }

    //请求列表数据
    componentDidMount(){
        this.fetchData();
    }
    fetchData() {
        let formData = new FormData();
        formData.append('startNum', 0);
        formData.append('endNum', 9);

        let uploadImageUrl = "http://172.16.0.236:8080/pwmana/itemsController/app/getHistoryVIResultList";
        //let uploadImageUrl = "http://172.16.0.236:8080/zt/vehicleIdentification!upload";

        return NetUitl.postUrlJson(uploadImageUrl,formData,(response) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(response),
                loaded: true,
            });
        })
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderLists}
                style={styles.listView}
            />
        );
    }

    renderLoadingView()
    {
        return (<View style={styles.container} >
                <Text>Loading......</Text>
            </View>

        );
    }

    //循环展现列表lists
    renderLists(lists) {
        return (
            <View style={styles.container}>
                {/*<Image
                 source={{uri: movie.posters.thumbnail}}
                 style={styles.thumbnail}
                 />*/}
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>车牌号：{lists.carNo}</Text>
                    <Text style={styles.filed}>车牌颜色：{lists.numberColor}</Text>
                    <Text style={styles.filed}>车型：{lists.carType}</Text>
                    <Text style={styles.filed}>车身颜色：{lists.color}</Text>
                </View>
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