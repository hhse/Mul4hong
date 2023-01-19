/******************************
⚠️如果放远程，请把Fimm.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡木木🍡
  wx交流群：1077223830
🫧脚本名称:Fido
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************

[rewrite_local]
^https?:\/\/server\.yoyiapp\.com\/fimo-common\/film*? url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/Fimm.js


[mitm]
hostname = server.yoyiapp.com

*******************************/
var body=$response.body;
body = body.replace(/isPurchase\":\d+/g,'isPurchase":0');
body = body.replace(/price\": "\d+"/g,'price": "0"');
body = body.replace(/special\":".*?\"/g,'special":""');
$done(body);
