/**
 * Created by Amy on 2016-11-08.
 * 说明：网络方法，依次传入请求地址，请求参数，成功回调事件
 */
let NetUtil = {
    postJson(url, data, callback){
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data;boundary=6ff46e0b6b5148d984f148b6542e5a5d'
            },
            body:data
        };
        alert( JSON.stringify(fetchOptions) );
        console.info(JSON.stringify(fetchOptions));
        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                //  callback(JSON.parse(responseText));
                callback(responseText);
            }).done();
    },
}
export default NetUtil;