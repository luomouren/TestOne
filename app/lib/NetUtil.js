/**
 * Created by Amy on 2016-11-08.
 * 说明：网络方法，依次传入请求地址，请求参数，成功回调事件
 */
let NetUtil = {
    //返回结果为文本类型
    postUrlText(url, data, callback){
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Encoding':'utf-8',
                'Content-Type': 'multipart/form-data;boundary=6ff46e0b6b5148d984f148b6542e5a5d'
            },
            body:data
        };
        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                //  callback(JSON.parse(responseText));
                callback(responseText);
            }).done();
    },

    //返回结果为json类型
    postUrlJson(url, data, callback){
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Encoding':'utf-8',
                'Content-Type': 'multipart/form-data;boundary=6ff46e0b6b5148d984f148b6542e5a5d'
            },
            body:data
        };
        fetch(url, fetchOptions)
            .then((response) => response.json())
            .then((responseJson) => {
                //  callback(JSON.parse(responseText));
                callback(responseJson);
            }).catch((err) => {
                callback("error");
                console.warn(err);
            }).done();
    },
}
export default NetUtil;