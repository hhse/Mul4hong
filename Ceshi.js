/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
木木测试脚本
脚本名称:木木测试脚本
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/uu.tuanyougou.com\/\/video\/registryUser.+$ url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/Ceshi.js
[mitm] 
hostname = *.tuanyougou.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.userId = 9999;
obj.data.endTime = "脚本成功啦";
obj.data.vip \d+ = 1;
    $done({body: JSON.stringify(obj)});
