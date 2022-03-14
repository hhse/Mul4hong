/*******************************
app下载地址：商店搜索：看漫画

  公众号：木木IOS分享 原十三座州府
 
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^https?:\/\/api-cdn\.321mh\.com\/comic-api\/v2  url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/kmh.js
[mitm] 
hostname = *.*.*

*******************************/

var _0xc843=["\x62\x6F\x64\x79","\x70\x61\x72\x73\x65","\x2F\x63\x6F\x6D\x69\x63\x2F\x67\x65\x74\x63\x6F\x6D\x69\x63\x6D\x61\x69\x6E\x64\x61\x74\x61","\x69\x6E\x64\x65\x78\x4F\x66","\x70\x72\x69\x63\x65\x22\x3A\x30","\x69\x73\x62\x75\x79\x22\x3A\x30","\x72\x65\x70\x6C\x61\x63\x65"]; var body=$response[_0xc843[0]]; var obj=JSON[_0xc843[1]](body); const vip=_0xc843[2]; if(body[_0xc843[3]](vip)!= -1) { body= replace(/price":((\d)+)/ig,body,_0xc843[4]);body= replace(/isbuy":((\d)+)/ig,body,_0xc843[5]) } function replace(_0xe0dcx5,_0xe0dcx6,_0xe0dcx7) { return _0xe0dcx6[_0xc843[6]](_0xe0dcx5,function(_0xe0dcx8) { return _0xe0dcx7 } ) } $done({body})
