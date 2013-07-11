/**
 * The index module
 */

// Import the server module
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// The mapping object 
var handle = {}; 
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;  

// loose coupling
server.start(router.route,handle);
