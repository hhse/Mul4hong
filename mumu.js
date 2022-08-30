
/*木木大帅

[rewrite_local]
^https:\/\/uu\.tuanyougou\.com\/\/video url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/mumu.js
[mitm] 
hostname = uu.tuanyougou.com

//hostname :uu.tuanyougou.com
//重写链接：^https:\/\/uu\.tuanyougou\.com\/\/video\/registryUser
*/ 
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
if (url.indexOf('/registryUser') != -1){
    obj.data.endTime = "木木大帅比";
    
}

$done({body: JSON.stringify(obj)});
