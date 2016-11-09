
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

//var REQUEST_URL = 'http://172.16.0.236:8080/zt?username=admin&password=12345678&formLoginHome=true';
var url = 'http://172.16.0.236:8080/zt?username=123';

class TestOne extends Component
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

    componentDidMount(){
        this.fetchData();
    }


    fetchData() {
        /* let params = {"name":"admin","password":"admin123"};

         fetch("http://192.168.0.102:8080/spring-mvc/items/queryItems.html" , {
         method: 'POST',
         headers: {},
         body:JSON.stringify(params),
         }).then((response) => {
         if (response.ok) {
         return response.json();
         }
         }).then((json) => {
         alert(JSON.stringify(json));
         }).catch((error) => {
         console.error(error);
         });
         */

        let formData = new FormData();
        formData.append("name","admin123456");
        formData.append("password","admin123");

        fetch("http://172.16.0.236:8080/spring-mvc/items/queryItems.html" , {
            method: 'POST',
            headers: {'Content-Type':'multipart/form-data', },
            body: formData,
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((json) => {
            alert(JSON.stringify(json));
        }).catch((error) => {
            console.error(error);
        });

        /* fetch("http://172.16.0.236:8080/zt?username=admin&password=12345678&formLoginHome=true")
         .then((response) => response.text())
         .then((responseData) => {
         console.log("responseData",responseData);
         })
         .done();*/

    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
        {/*<ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderMovie}
         style={styles.listView}
         />*/}
        );
    }

    renderLoadingView()
    {
        return (<View style={styles.container} >
                <Text>Loading movies......</Text>
            </View>

        );
    }

    renderMovie(movie) {
        return (
            <View style={styles.container}>
                {/*<Image
                 source={{uri: movie.posters.thumbnail}}
                 style={styles.thumbnail}
                 />
                 <View style={styles.rightContainer}>
                 <Text style={styles.title}>{movie.title}</Text>
                 <Text style={styles.year}>{movie.year}</Text>
                 </View>  */}
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
AppRegistry.registerComponent('TestOne', () => TestOne);