/*******************************

  公众号：木木IOS分享 原十三座州府
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖️️
群1077223830
*******************************
[rewrite_local]
^http:\/\/iosv2\.cjapi\.wufan88\.com  url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/wf.js
[mitm] 
hostname = iosv2.cjapi.wufan88.com

*******************************/

var _0x5f0f=["\x62\x6F\x64\x79","\x75\x72\x6C","\x70\x61\x72\x73\x65","\x2F\x75\x73\x65\x72","\x69\x6E\x64\x65\x78\x4F\x66","\x69\x73\x5F\x76\x69\x70\x22\x3A\x22\x39\x41\x30\x36\x38\x34\x37\x39\x32\x30\x32\x31\x44\x37\x33\x42\x45\x34\x32\x42\x37\x31\x34\x39\x31\x34\x36\x39\x41\x44\x46\x41\x22","\x72\x65\x70\x6C\x61\x63\x65"]; var body=$response[_0x5f0f[0]]; var url=$request[_0x5f0f[1]]; var obj=JSON[_0x5f0f[2]](body); const vip=_0x5f0f[3]; if(url[_0x5f0f[4]](vip)!= -1) { body= replace(/is_vip":(\"(.*?)\")/ig,body,_0x5f0f[5]) } function replace(_0x4f13x6,_0x4f13x7,_0x4f13x8) { return _0x4f13x7[_0x5f0f[6]](_0x4f13x6,function(_0x4f13x9) { return _0x4f13x8 } ) } $done({body})
