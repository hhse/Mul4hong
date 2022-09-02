/* 


[rewrite_local]
^https?:\/\/server\.yoyiapp\.com  url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/jj.js
[mitm] 
hostname = *.*.* 
 */



var body = $response.body;
var obj = JSON.parse(body);

const vip = '/fimo-common/film';


if (body.indexOf(vip) != -1) {
    body = replace(/isPurchase":((\d)+)/ig, body, 'isPurchase":0');
}

function replace(reg, str, value) {
    return str.replace(reg, function (word) {
            return value;
        }
    );
}

$done({body});
