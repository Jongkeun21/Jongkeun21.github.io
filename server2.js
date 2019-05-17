var http = require("http");

function onRequest ( request, response ) {
    console.log("Request Received");
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("HI! THIS IS SECOND TIME OF USING NODE.JS~ ")
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has STARTED");