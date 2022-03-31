/*[rewrite_local]
^https:\/\/www\.ssalegs\.store\/cms\/Appapi\/username\/username url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/ssa.js
[mitm] 

hostname = www.ssalegs.store
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/cms/Appapi/username/username';

if (url.indexOf(vip) != -1) {
    obj.point= 999999;
    obj.jomkenylv = 99;
    obj.groupname = "白金会员";
    obj.overduedate = 2027383523;
    obj.overduedate2 = 2027383523;
    body = JSON.stringify(obj);
}
$done({body});
