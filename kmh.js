/*******************************
app下载地址：商店搜索：驾照一点通极速版

  公众号：木木IOS分享 原十三座州府
  app下载地址：https://down.ggktfs.cc/ios.html
使用声明：此脚本仅供学习与交流，
        请勿转载与贩卖！
群1077223830
*******************************
[rewrite_local]
^https?:\/\/api-cdn\.321mh\.com\/comic-api\/v2  url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/kmh.js
[mitm] 
hostname = *.*.*

*******************************/

const body = $response.body;
const url = $request.url;
const obj = JSON.parse(body);

const vip = '/comic/getcomicmaindata';


if (url.indexOf(vip) != -1) {
    body = replace(/price":((\d)+)/ig, body, 'price":0');
    body = replace(/isbuy":((\d)+)/ig, body, 'isbuy":0');
}

function replace(reg, str, value) {
    return str.replace(reg, function (word) {
            return value;
        }
    );
}

$done({body});
