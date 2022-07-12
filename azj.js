/*
app下载地址：商店搜索：❤️证件
[rewrite_local]
^https:\/\/zhengjian\.flyingeffect\.com\/api\/ url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/azj.js
[mitm] 
hostname = zhengjian.flyingeffect.com
公众号：木木IOS分享 原十三座州府
群1077223830
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/user/userInfo';

if (url.indexOf(vip) != -1) {
    obj.data.is_vip = 1;
    obj.data.vip_end_time = "2030-08-10 18:14:09";
    body = JSON.stringify(obj);
}
$done({body});
