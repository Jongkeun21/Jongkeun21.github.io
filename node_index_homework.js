var server = require("./server_homework");
var router = require("./router_homework");
var requestHandler = require("./request_handler_homework");

var handle = {}
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/hello"] = requestHandler.hello;

server.start(router.route, handle);