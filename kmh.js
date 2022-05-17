/*******************************
app下载地址：商店搜索：驾照一点通极速版

  公众号：木木IOS分享 原十三座州府
  app下载地址：https://down.ggktfs.cc/ios.html
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^https:\/\/comic\.321mh\.com\/v2  url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/kmh.js
[mitm] 
hostname = comic.321mh.com

*******************************/

var body=$response['body'];var url=$request['url'];var obj=JSON['parse'](body);const vip='/comic/getcomicmaindata';if(url['indexOf'](vip)!=-(0x4a206^0x4a207)){body=replace(/price":((\d)+)/ig,body,'price\x22:0');body=replace(/isbuy":((\d)+)/ig,body,'isbuy\x22:0');}function replace(_0xa12671,_0x5ed061,_0x44d4b9){return _0x5ed061['replace'](_0xa12671,function(_0x35982f){return _0x44d4b9;});}$done({'body':body});
