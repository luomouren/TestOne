import React, {
    Component,
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Alert,
    ScrollView,
    ListView,
    Image,
    ActivityIndicator,
    ProgressBarAndroid,
    ActivityIndicatorIOS,
    Platform,
    AppRegistry,
} from 'react-native'

//import TimerEnhance from 'react-native-smart-timer-enhance'
import PullToRefreshListView from 'react-native-smart-pull-to-refresh-listview';
import NetUitl from './app/lib/NetUtil';

class PullToRefreshListViewDemo extends React.Component {
  // 构造
  constructor(props) {
    super(props);

    this._dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      //sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    let dataList = []

    this.state = {
      first: true,
      dataList: dataList,
      dataSource: this._dataSource.cloneWithRows(dataList),
    }
  }

  componentDidMount () {
    this._pullToRefreshListView.beginRefresh()
  }

  //Using ListView
  render() {
    return (
        <PullToRefreshListView
            ref={ (component) => this._pullToRefreshListView = component }
            viewType={PullToRefreshListView.constants.viewType.listView}
            contentContainerStyle={{backgroundColor: 'yellow', }}
            style={{marginTop: Platform.OS == 'ios' ? 64 : 56, }}
            initialListSize={20}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            pageSize={20}
            renderRow={this._renderRow}
            renderHeader={this._renderHeader}
            renderFooter={this._renderFooter}
            //renderSeparator={(sectionID, rowID) => <View style={styles.separator} />}
            onRefresh={this._onRefresh}
            onLoadMore={this._onLoadMore}
            pullUpDistance={35}
            pullUpStayDistance={50}
            pullDownDistance={35}
            pullDownStayDistance={50}
        />
    )

  }

  //渲染行数据
  _renderRow = (rowData, sectionID, rowID) => {
    return (
        <View style={styles.thumbnail}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>车牌号：{rowData.carNo}</Text>
            <Text style={styles.filed}>车牌颜色：{rowData.numberColor}</Text>
            <Text style={styles.filed}>车型：{rowData.carType}</Text>
            <Text style={styles.filed}>车身颜色：{rowData.color}</Text>
          </View>
        </View>
    )
  }

  _renderHeader = (viewState) => {
    let {pullState, pullDistancePercent} = viewState
    let {refresh_none, refresh_idle, will_refresh, refreshing,} = PullToRefreshListView.constants.viewState
    pullDistancePercent = Math.round(pullDistancePercent * 100)
    switch(pullState) {
      case refresh_none:
        return (
            <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
              <Text>pull down to refresh</Text>
            </View>
        )
      case refresh_idle:
        return (
            <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
              <Text>pull down to refresh{pullDistancePercent}%</Text>
            </View>
        )
      case will_refresh:
        return (
            <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
              <Text>release to refresh{pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>
            </View>
        )
      case refreshing:
        return (
            <View style={{flexDirection: 'row', height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
              {this._renderActivityIndicator()}<Text>refreshing</Text>
            </View>
        )
    }
  }

  _renderFooter = (viewState) => {
    let {pullState, pullDistancePercent} = viewState
    let {load_more_none, load_more_idle, will_load_more, loading_more, loaded_all, } = PullToRefreshListView.constants.viewState
    pullDistancePercent = Math.round(pullDistancePercent * 100)
    switch(pullState) {
      case load_more_none:
        return (
            <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
              <Text>pull up to load more</Text>
            </View>
        )
      case load_more_idle:
        return (
            <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
              <Text>pull up to load more{pullDistancePercent}%</Text>
            </View>
        )
      case will_load_more:
        return (
            <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
              <Text>release to load more{pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>
            </View>
        )
      case loading_more:
        return (
            <View style={{flexDirection: 'row', height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
              {this._renderActivityIndicator()}<Text>loading</Text>
            </View>
        )
      case loaded_all:
        return (
            <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
              <Text>no more</Text>
            </View>
        )
    }
  }

  //默认加载——刷新更新
  _onRefresh = () => {
    //simulate request data
    setTimeout( () => {

      let refreshedDataList = []
      //请求url加载数据
      let formData = new FormData();
      formData.append('startNum', 1);
      formData.append('endNum', 10);
      let uploadImageUrl = "http://172.16.0.236:8080/pwmana/itemsController/app/getHistoryVIResultList";
      //let uploadImageUrl = "http://172.16.0.236:8080/zt/vehicleIdentification!upload";

      return NetUitl.postUrlJson(uploadImageUrl,formData,(response) => {

        for(let i = 0; i < response.length; i++) {
          refreshedDataList.push({
            carNo: response[i].carNo,
            numberColor: response[i].numberColor,
            carType: response[i].carType,
            color: response[i].color,
          })
        }

        this.setState({
          dataList: refreshedDataList,
          dataSource: this._dataSource.cloneWithRows(refreshedDataList),
        })
        this._pullToRefreshListView.endRefresh()

      })

    }, 3000)
  }
  //加载更多
  _onLoadMore = () => {
    setTimeout( () => {
      let addedDataList = []
      let formData = new FormData();
      formData.append('startNum', this.state.dataList.length+1);
      formData.append('endNum', this.state.dataList.length+10);

      let uploadImageUrl = "http://172.16.0.236:8080/pwmana/itemsController/app/getHistoryVIResultList";
      //let uploadImageUrl = "http://172.16.0.236:8080/zt/vehicleIdentification!upload";

      return NetUitl.postUrlJson(uploadImageUrl,formData,(response) => {
        //处理请求结果
        for(let i = 0; i < response.length; i++) {
          addedDataList.push({
            carNo: response[i].carNo,
            numberColor: response[i].numberColor,
            carType: response[i].carType,
            color: response[i].color,
          })
        }
        let newDataList = this.state.dataList.concat(addedDataList)
        this.setState({
          dataList: newDataList,
          dataSource: this._dataSource.cloneWithRows(newDataList),
        })
        let loadedAll
        if(response.length ==0) {
          loadedAll = true
          this._pullToRefreshListView.endLoadMore(loadedAll)
        }else {
          loadedAll = false
          this._pullToRefreshListView.endLoadMore(loadedAll)
        }


      })

    }, 3000)
  }

  _renderActivityIndicator() {
    return ActivityIndicator ? (
        <ActivityIndicator
            style={{marginRight: 10,}}
            animating={true}
            color={'#ff0000'}
            size={'small'}/>
    ) : Platform.OS == 'android' ?
        (
            <ProgressBarAndroid
                style={{marginRight: 10,}}
                color={'#ff0000'}
                styleAttr={'Small'}/>

        ) :  (
        <ActivityIndicatorIOS
            style={{marginRight: 10,}}
            animating={true}
            color={'#ff0000'}
            size={'small'}/>
    )
  }

}



const styles = StyleSheet.create({
  itemHeader: {
    height: 35,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
    backgroundColor: 'blue',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    height: 60,
    //borderBottomWidth: StyleSheet.hairlineWidth,
    //borderBottomColor: '#ccc',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentContainer: {
    paddingTop: 20 + 44,
  },

  thumbnail: {
    padding: 6,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
    overflow: 'hidden',
  },

  textContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  filed: {
    textAlign: 'center',
  },
})

//export default TimerEnhance(PullToRefreshListViewDemo)
AppRegistry.registerComponent('TestOne', () => PullToRefreshListViewDemo);