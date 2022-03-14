/*******************************
app下载地址：商店搜索：看漫

  公众号：木木IOS分享 原十三座州府
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^https?:\/\/api-cdn\.321mh\.com\/comic-api\/v2 https://raw.githubusercontent.com/hhse/Mul4hong/master/kmh.js
[mitm] 
hostname = *.*.*

*******************************/
/*******************************
app下载地址：商店搜索：看漫

公众号：木木IOS分享 原十三座州府

使用声明：️此脚本仅供学习与交流，
请勿转载与贩卖️️
群1077223830

[rewrite_local]
^https?://api-cdn.321mh.com/comic-api/v2 https://raw.githubusercontent.com/hhse/Mul4hong/master/kmh.js
[mitm]
hostname = ..*

*******************************/

var _0xb4ca=["\x62\x6F\x64\x79","\x75\x72\x6C","\x70\x61\x72\x73\x65","\x2F\x63\x6F\x6D\x69\x63\x2F\x67\x65\x74\x63\x6F\x6D\x69\x63\x6D\x61\x69\x6E\x64\x61\x74\x61","\x69\x6E\x64\x65\x78\x4F\x66","\x70\x72\x69\x63\x65\x22\x3A\x30","\x69\x73\x62\x75\x79\x22\x3A\x30","\x72\x65\x70\x6C\x61\x63\x65"]; var body=$response[_0xb4ca[0]]; var url=$request[_0xb4ca[1]]; var obj=JSON_0xb4ca[2]; const vip=_0xb4ca[3]; if(url_0xb4ca[4]!= -1) { body= replace(/price":((\d)+)/ig,body,_0xb4ca[5]);body= replace(/isbuy":((\d)+)/ig,body,_0xb4ca[6]) } function replace(_0x9f62x6,_0x9f62x7,_0x9f62x8) { return _0x9f62x7[_0xb4ca[7]](_0x9f62x6,function(_0x9f62x9) { return _0x9f62x8 } ) } $done({body})
