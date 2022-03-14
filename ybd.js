


/*******************************
  公众号：木木IOS分享 原十三座州府
  app下载地址：https://down.ggktfs.cc/ios.html
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^https?:\/\/app\.yd6666\.me url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/ybd.js
[mitm] 
hostname = *.*.*

*******************************/

var _0x7404=["\x62\x6F\x64\x79","\x75\x72\x6C","\x70\x61\x72\x73\x65","\x2F\x61\x70\x70\x61\x70\x69","\x2F\x61\x70\x70\x61\x70\x69\x2F\x64\x65\x74\x61\x69\x6C","\x69\x6E\x64\x65\x78\x4F\x66","\x69\x73\x56\x69\x70\x22\x3A\x74\x72\x75\x65","\x63\x6F\x72\x6E\x22\x3A\x39\x39\x39\x39\x39\x39\x39","\x76\x69\x70\x45\x6E\x64\x44\x61\x74\x65\x22\x3A\x31\x39\x39\x39\x39\x39\x39\x39\x39","\x67\x6F\x6C\x64\x22\x3A\x30","\x72\x65\x70\x6C\x61\x63\x65"]; var body=$response[_0x7404[0]]; var url=$request[_0x7404[1]]; var obj=JSON[_0x7404[2]](body); const vip=_0x7404[3]; const yz=_0x7404[4]; if(url[_0x7404[5]](vip)!= -1) { body= replace(/isVip":((\w)+)/ig,body,_0x7404[6]);body= replace(/corn":((\d)+)/ig,body,_0x7404[7]);body= replace(/vipEndDate":((\w)+)/ig,body,_0x7404[8]) } if(url[_0x7404[5]](yz)!= -1) { body= replace(/isVip":((\w)+)/ig,body,_0x7404[6]);body= replace(/gold":((\d)+)/ig,body,_0x7404[9]) } function replace(_0x5efax7,_0x5efax8,_0x5efax9) { return _0x5efax8[_0x7404[10]](_0x5efax7,function(_0x5efaxa) { return _0x5efax9 } ) } $done({body})
