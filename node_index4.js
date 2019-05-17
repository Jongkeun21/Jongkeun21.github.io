var server = require("./server6");
var router = require("./router3");
var requestHandler = require("./request_handler3");

var handle = {}
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/hello"] = requestHandler.hello;

server.start(router.route, handle);