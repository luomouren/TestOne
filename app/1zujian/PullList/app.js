import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ListView,
} from 'react-native';

import {PullList} from 'react-native-pullview';
import NetUitl from './app/lib/NetUtil';

export default class extends Component {

	constructor(props) {
        super(props);
        this.dataSource = [{
            id: 0,
            title: `this is the first.`,
        }];
        this.state = {
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
        };
        this.renderHeader = this.renderHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.loadMore = this.loadMore.bind(this);
        // this.loadMore();
    }

    onPullRelease(resolve) {
		//do something
		setTimeout(() => {
            resolve();
        }, 3000);
    }

	topIndicatorRender(pulling, pullok, pullrelease) {
		return <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
		  <ActivityIndicator size="small" color="gray" />
		  {pulling ? <Text>当前PullList状态: pulling...</Text> : null}
		  {pullok ? <Text>当前PullList状态: pullok......</Text> : null}
		  {pullrelease ? <Text>当前PullList状态: pullrelease......</Text> : null}
		</View>;
	}

    render() {
        return (
          <View style={styles.container}>
              <PullList
                  style={{}}
                  onPullRelease={this.onPullRelease} topIndicatorRender={this.topIndicatorRender} topIndicatorHeight={60}
                  renderHeader={this.renderHeader}
                  dataSource={this.state.list}
                  pageSize={5}
                  initialListSize={11}
                  renderRow={this.renderRow}
                  onEndReached={this.loadMore}
                  onEndReachedThreshold={60}
                  renderFooter={this.renderFooter}
                  />
          </View>
        );
    }

    renderHeader() {
      return (
          <View style={{height: 50, backgroundColor: '#eeeeee', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>This is header</Text>
          </View>
      );
    }

    renderRow(item, sectionID, rowID, highlightRow) {
        if(item.id == 0){

        }
        return (
            <View style={styles.rightContainer}>
                {item.id === 0 ? <Text/> :<Text style={styles.title}>车牌号：{item.carNo}</Text>}
                {item.id === 0 ? <Text/> :<Text style={styles.filed}>车牌号：{item.numberColor}</Text>}
                {item.id === 0 ? <Text/> :<Text style={styles.filed}>车牌号：{item.carType}</Text>}
                {item.id === 0 ? <Text/> :<Text style={styles.filed}>车牌号：{item.color}</Text>}
            </View>
        );
    }

    renderFooter() {
      if(this.state.nomore) {
          return null;
      }
      return (
          <View style={{height: 100}}>
              <ActivityIndicator />
          </View>
      );
    }

    loadMore() {
        console.log("this.dataSource",this.dataSource);
        console.log("this.dataSource.length",this.dataSource.length);

        let formData = new FormData();
        formData.append('startNum', 1);
        formData.append('endNum', 10);
        let uploadImageUrl = "http://172.16.0.236:8080/pwmana/itemsController/app/getHistoryVIResultList";
        //let uploadImageUrl = "http://172.16.0.236:8080/zt/vehicleIdentification!upload";

        return NetUitl.postUrlJson(uploadImageUrl,formData,(response) => {
            for(var j=0;j<response.length;j++){
                this.dataSource.push({
                    id: j+1,
                    carNo: response[j].carNo,
                    numberColor: response[j].numberColor,
                    carType: response[j].carType,
                    color: response[j].color,
                });
            }
            setTimeout(() => {
                this.setState({
                    list: this.state.list.cloneWithRows(this.dataSource)
                });
            }, 1000);
        })
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
      flex: 1,
  },
  title: {
     fontSize: 20,
     marginBottom: 8,
     marginTop:8,
     textAlign: 'center',
  },
  filed: {
     textAlign: 'center',
  },
});
