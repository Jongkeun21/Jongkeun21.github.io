var server = require("./server7");
var router = require("./router4");
var requestHandler = require("./request_handler4");

var handle = {}
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/hello"] = requestHandler.hello;

server.start(router.route, handle);