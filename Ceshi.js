/*
公众号:木木IOS分享
关注了解更多新科技！！！
木木测试脚本
脚本名称:木木测试脚本

[mitm] 
*.tuanyougou.*
[rewrite_local]  
^http[s]?:\/\/uu.tuanyougou.com\/\/video\/registryUser.+$ url script-response-body tuanyougou.js
*/
var obj = JSON.parse($response.body);
    obj.data.userId = 9999;
obj.data.endTime = "脚本成功啦";
    $done({body: JSON.stringify(obj)});
