var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var getData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for "+pathname+" received");
    
        request.setEncoding("utf8");
    
        request.addListener("data", function(getDataChunk) {
            getData += getDataChunk;
            console.log("Received GET data chunk '" + getDataChunk + "'.");
        });
    
        request.addListener("end", function() {
            route(handle, pathname, response, getData);
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started" +" //server.js");
}

exports.start = start;
