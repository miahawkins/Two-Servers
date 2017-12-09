var http = require("http");
var PORT1 = 7000;

function handlesThisRequest(request, response) {
	response.end("You are the epitome of greatness!")
}

var server1 = http.createServer(handlesThisRequest);

server1.listen(PORT1, function(){
	console.log("Server is listening " + PORT1)
})



var PORT2 = 7500;

function handlesThatRequest(request, response) {
	response.end("You lower the IQ of the entire class by half!")
}

var server2 = http.createServer(handlesThatRequest);

server2.listen(PORT2, function(){
	console.log("Server is listening " + PORT2)
})