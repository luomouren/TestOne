import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Platform
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import LoginButton from '../lib/LoginButton';
import NetUitl from '../lib/NetUtil';
import ImageResult from '../lib/ImageResult';
export default class App extends React.Component {

/*  state = {
    avatarSource: null,
  };*/

  selectPhotoTapped() {
    const options = {
      title: '上传图片',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '从相册选择',
      cancelButtonTitle: '取消',

      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        var source;

        // You can display the image using either:
        //source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        //Or:
        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true};
        } else {
          source = {uri: response.uri.replace('file://', ''), isStatic: true};
        }

        this.setState({
          avatarSource: source
        });
      }
    });
  }


    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            loaded: false,
            avatarSource:null,
        };
    }
    onImageResult(response){
        this.setState({
            dataSource: response,
            loaded: true,
        });

        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name : 'ImageResult',
                component : ImageResult,
                params: {
                    loaded: this.state.loaded,
                    dataSource: this.state.dataSource,
                }
            });
        }
    }

  upload() {
    console.log('upload photo');
    let formData = new FormData();
    let key = 'key';
    let token = '34567890';
    alert(this.state.avatarSource.uri);
    formData.append('file', {uri: this.state.avatarSource.uri, type: 'application/octet-stream', name: key});
    formData.append('key', key);
    formData.append('token', token);

    let opts = {};
    opts.body = formData;
    opts.method = 'post';

    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data;boundary=6ff46e0b6b5148d984f148b6542e5a5d'
      },
      body:formData
    };

    let uploadImageUrl = "http://172.16.0.236:8080/pwmana/itemsController/app/upload";
    //let uploadImageUrl = "http://172.16.0.236:8080/zt/vehicleIdentification!upload";

    return NetUitl.postUrlJson(uploadImageUrl,formData,(response) => {
      this.onImageResult(response);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource === null ? <Text>选择图片</Text> :
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>
        <LoginButton name='上传' onPressCallback={this.upload.bind(this)}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 90,
    width: 250,
    height: 350
  },
});
