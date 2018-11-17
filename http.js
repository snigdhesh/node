var http= require('http');

var server = http.createServer(
    //This function holds the application to run on this server.
    function(req, res){
        //Writing headers
        res.writeHead(200,{'content-type':'text/plain'});
        //Writing response body
        res.end('Hello World');
    }
);

server.listen(9001,'127.0.0.1');
console.log("Server started at port 9001");

