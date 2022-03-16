/*******************************
app下载地址：商店搜索：FIMO

  公众号：木木IOS分享 原十三座州府
  app下载地址：
https://apps.apple.com/cn/app/fimo-%E5%A4%8D%E5%8F%A4%E8%83%B6%E7%89%87%E7%9B%B8%E6%9C%BA/id1454219307
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^https?:\/\/server\.yoyiapp\.com  url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/fimo.js
[mitm] 
hostname = *.*.*

*******************************/
var body=$response['body'];var url=$request['url'];var obj=JSON['parse'](body);const vip='/fimo-common';if(url['indexOf'](vip)!=-0x1){body=replace(/isPurchase":((\d))/ig,body,'isPurchase\x22:0');}function replace(_0x34fa1e,_0x35be68,_0x3a3831){return _0x35be68['replace'](_0x34fa1e,function(_0x5ba4ff){return _0x3a3831;});}$done({'body':body});
