var http = require("http");
var port = 8080;

http.createServer(function(request, response)
{
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.end('<pre>Hello World\n</pre>');
}).listen(port);

console.log('Server running at http://localhost:' + port + '/');