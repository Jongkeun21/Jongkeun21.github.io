function start ( response ) {
    console.log("Request handler 'start' was called" + " //requestHandler.js");

    setTimeout(function() {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello start requestHandler");
        response.end();
    }, 10000);
}

function hello ( response ) {
    console.log("Request handler 'hello' was called" + " //requestHandler.js");

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello hello requestHandler");
    response.end();
}

exports.start = start;
exports.hello = hello;