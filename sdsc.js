/*
app下载地址：商店搜索：闪电素材
^http[s]?:\/\/ipmapi\.intbull\.com url script-response-body sdsc.js
MITM =ipmapi.intbull.com

http:\/\/ipmapi\.intbull\.com\/v1\/user\/info
公众号：木木IOS分享 原十三座州府
群1077223830
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/user/info';
if (url.indexOf(vip) != -1) {
    /*for (var i = 0; i < obj.data.chapter_list.length; i++) {
        obj.data.chapter_list[i].price = 0;
        obj.data.chapter_list[i].default_price = 0;
        obj.data.chapter_list[i].download_price = 0;
    }
    body = JSON.stringify(obj);*/
    body = replace(/vipExpireDate":(( -\d)+)/ig, body, 'vipExpireDate": 18888888880');
    body = replace(/vipGrade":(( \d)+)/ig, body, 'vipGrade": 5');
    body = replace(/userType":(( \d)+)/ig, body, 'userType": 3');
}

function replace(reg, str, value) {
    return str.replace(reg, function (word) {
            return value;
        }
    );
}

$done({body});
