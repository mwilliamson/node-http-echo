var http = require("http");

var port = process.env.PORT || 50999;

http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify(describeRequest(request), null, 4));
    response.end("\n");
}).listen(port);

function describeRequest(request) {
    return {
        headers: request.headers,
        url: request.url,
        method: request.method,
        httpVersion: request.httpVersion
    };
}
