/*
黄油相机

>Gx3dong制作,免费资源群:1077223830.进群不迷路.
>木木团队,欢迎关注公众号:十三座州府

QX1.0.10：
[rewrite_local]
https:\/\/api4\.bybutter\.com\/v4\/* url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/hyxj.js

Surge4:
[Script]
http-response https:\/\/api4\.bybutter\.com\/v4\/* requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/hhse/Mul4hong/master/hyxj.js

[MITM]
hostname = %APPEND% api4.bybutter.com
*/

body = $response.body.replace(/\"ownership\":\"\w+\"/g, '\"ownership\":"free"').replace(/\"usageType\":\"\w+\"/g, '\"usageType\":"unlimited"').replace(/\"memberships\":\[\]/g, "\"memberships\":[{\"endAt\":1780697166,\"id\":\"1\",\"name\":\"普通会员\",\"ownership\":\"temporary\",\"startAt\":1587654321,\"usageType\":\"unlimited\"}]").replace(/false/g, "true")
$done({body});
