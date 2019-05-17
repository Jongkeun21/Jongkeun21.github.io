var server = require("./server5")
var router = require("./router2");
var requestHandler = require("./request_handler2");

var handle = {}
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/hello"] = requestHandler.hello;

server.start(router.route, handle);