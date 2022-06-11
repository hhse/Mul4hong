/*******************************

[rewrite_local]
^http:\/\/cc\.lzjoy\.com\/.?urlparam.+$  url script-response-body ccjt.js
[mitm] 
hostname = cc.lzjoy.com

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/GetVip';
const pay = '/detail';


if (url.indexOf(vip) != -1) {
  obj.list.is_vip = "1";
  obj.list.expire_date = "2030-11-12";
      body = JSON.stringify(obj);
}
if (url.indexOf(pay) != -1) {
  obj.list.has_buy = "1";
      body = JSON.stringify(obj);
}

$done({body});




  

