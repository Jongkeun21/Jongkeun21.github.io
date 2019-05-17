function start() {
    console.log("Request handler 'start' was called");
    
    return "start";
}

function hello() {
    console.log("Request handler 'hello' was called");

    return "hello";
}

exports.start = start;
exports.hello = hello;