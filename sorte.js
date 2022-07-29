/*******************************

  公众号：木木IOS分享 原十三座州府
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^https:\/\/api\.sortedapp\.com\/receipts url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/sorte.js
[mitm] 
hostname = api.sortedapp.com

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/verify';


if (url.indexOf(vip) != -1) {
    obj.isPro = true;
	body = JSON.stringify(obj);
}
$done({body});

