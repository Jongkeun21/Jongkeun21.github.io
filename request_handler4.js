//import { request } from "http";

var querystring = require("querystring");

function start(response) {
    console.log("Request handler 'start' was called");

    var body = '<html>'+'<head>'+
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />'+
        '</head>'+'<body>'+
        '이름을 입력하세요.'+'<br>'+
        '<form action="/hello" method="post">'+
        '<input type="text" name="text"></input>'+
        '<input type="submit" value="입력" />'+
        '</form>'+'</body>'+'</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function hello(response, postData) {
    console.log("Request handler 'hello' was called");

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Mr/Ms " + querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.hello = hello;

// request.addListener("data", function(chunk) {

// });

// request.addListener("end", function() {

// });