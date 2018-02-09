// var http = require('http');
//
// var port = 8081;
//
// var s = http.createServer();
// s.on('request', function (request, response) {
//     response.writeHead(200);
//     console.log(request.method);
//     console.log(request.headers);
//     console.log(request.url);
//     response.write('hi');
//     response.end();
// });
//
// s.listen(port);
// console.log('Browse to http://127.0.0.1:' + port);



var http = require('http');

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " URL");
    process.exit(-1);
}

var url = process.argv[2]

http.get(url, function(res) {
    console.log("Got response: " + res.statusCode);
    var content = '';
    res.on('data', function(chunk) {
        console.log('chunk ' + chunk.length);
        content += chunk;
    });
    res.on('end', function() {
        console.log('end');
        console.log(content.length);
        console.log(content);
    });
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});


//
// let name = 'Sandro';
// console.log('My name is ' + name);
// console.log(`My name is ${name}`);