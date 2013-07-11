/**
 * Request handler module, called by router module
 */

var exec = require("child_process").exec;

function start(response) {
	console.log("Request handler 'start' was called.");
	var content = "empty";

	exec("find /",{timeout:10000,maxBuffer:20000*1024}, function(error, stdout, stderr){
		//content = stdout;
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write(stdout);
		response.end();
	});
	
	return content;

	/*function sleep(milliSeconds){
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + milliSeconds);
	}

	sleep(10000);
	return "Hello Start";*/
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello Upload");
	response.end();
	
	//return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
