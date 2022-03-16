/*******************************
app下载地址：商店搜索：FIMO

  公众号：木木IOS分享 原十三座州府
  app下载地址：
https://apps.apple.com/cn/app/fimo-%E5%A4%8D%E5%8F%A4%E8%83%B6%E7%89%87%E7%9B%B8%E6%9C%BA/id1454219307
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^https?:\/\/server\.yoyiapp\.com  url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/fimo.js
[mitm] 
hostname = *.*.*

*******************************/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/fimo-common/film';


if (url.indexOf(vip) != -1) {
    body = replace(/isPurchase":((\d)+)/ig, body, 'isPurchase":0');
}

function replace(reg, str, value) {
    return str.replace(reg, function (word) {
            return value;
        }
    );
}

$done({body});
