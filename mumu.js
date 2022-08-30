/*******************************

  公众号：木木IOS分享 原十三座州府
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^https:\/\/uu\.tuanyougou\.com\/\/video url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/mumu.js
[mitm] 
hostname = uu.tuanyougou.com

//hostname :uu.tuanyougou.com
//重写链接：^https:\/\/uu\.tuanyougou\.com\/\/video\/registryUser

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const mumu = '/registryUser';


if (url.indexOf(mumu) != -1) {
    obj.data.isVip = 1;
obj.data.endTime = "木木讲完啦";


	body = JSON.stringify(obj);
}


$done({body});
