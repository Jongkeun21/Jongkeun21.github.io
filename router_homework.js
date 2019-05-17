function route(handle, pathname, response, getData) {
    console.log("About to route a request for " + pathname + " //router.js");

    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, getData);
    } else {
        console.log("No request handler found for " + pathname + " //router.js");
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;