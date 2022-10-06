/******************************

脚本功能：看理想-看见另一种可能+解锁VIP
特别提示：这个版本只能解锁视频—全部解锁可以加会员群！
下载地址：https://is.gd/CjkkBS
软件版本：3.14.
更新时间：2022-9-30
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.vistopia\.com\.cn url script-request-header https://raw.githubusercontent.com/hhse/Mul4hong/master/klx.js

[mitm] 

hostname = api.vistopia.com.cn

*******************************/

var Url = $request.url;
// var Url = "https://api.vistopia.com.cn/api/v1/user/check-unread?api_token=Zgfbs2DDhRJpugauNmpRk9ZZEvymatOQuopg2Etp02qVPsPx5ZyRKdxzBICGCLxI&req_time=1664954220&sign=06415db24158fbec1542640c534a3072"
function setQueryString(key, val) { 
    var url = Url.split('?'), search=url[1];
    var query = {};
    if (search) {
        search.split('&').forEach((item) => {
            var arr = item.split('=');
            query[arr[0]] = arr[1];
        });
    }
    query[key] = val;
    var queryArr = [];
    for (var p in query) {
        queryArr.push(p + '=' + query[p]);
    }
    return url[0]+'?'+queryArr.join('&');
};
setQueryString("api_token","60ONiZRsgFEFpbGXBp8orRTm3avSET4WVwnzYRP8NoMTDBZeB8jr6tyy1BHNxYax");

Url = setQueryString("api_token","60ONiZRsgFEFpbGXBp8orRTm3avSET4WVwnzYRP8NoMTDBZeB8jr6tyy1BHNxYax");
Url = setQueryString("sign","f4d5833dc8183d7cd3e1c09a70ae7f07");
console.log(Url);
// var modifiedHeaders = $request.query;

// modifiedHeaders['api_token'] = '60ONiZRsgFEFpbGXBp8orRTm3avSET4WVwnzYRP8NoMTDBZeB8jr6tyy1BHNxYax';


// modifiedHeaders['sign'] = 'f4d5833dc8183d7cd3e1c09a70ae7f07';

// console.log(modifiedHeaders)

// $done({ headers: modifiedHeaders });
$done({ url:Url });
