// const http = require('http');
// const qs = require('querystring');
//
// http.createServer((request, response) => {
//     let body = "";
//     if(request.url === "/") {
//         response.writeHead(200, {
//             "Content-Type": "text/html"
//         });
//         return response.end(
//             '<form action="/submit" method="post">\
//             <input type="text" name="sometext">\
//             <input type="submit" value="Send some text">\
//             </form>'
//         );
//     }
//
//     if(request.url === "/submit") {
//         request.on('readable', () => {
//             let data = request.read();
//             data && (body += data);
//         });
//         request.on('end', () => {
//             let fields = qs.parse(body);
//             response.end(`Thanks for sending: ${fields.sometext}`);
//         });
//     }
// }).listen(8080);



// const http = require('http');
// const server = new http.Server();
//
// server.on("request", (request, socket) => {
//     console.log(request.url);
//     http.request({
//         host: 'www.example.org',
//         method: 'GET',
//         path: "/",
//         port: 80
//     }, response =>
//         response.pipe(socket))
//         .end();
// });
//
// server.listen(8080, () => console.log('Proxy server listening on localhost:8080'));


const fs = require('fs');
// console.log('Copying...');
// fs.readFile('./passthrough.txt', null, (error1, block) => {
//     if (error1) {
//         throw error1;
//     }
//     console.log('block',block)
//     console.log('block-string',block.toString())
//     console.log('Size: ' + block.length);
//     fs.writeFile('destination.txt', block, (error2) => {
//         if (error2) {
//             throw error2;
//         }
//         console.log('Done.');
//     });
// });


// fs.createReadStream('./passthrough.txt')
// .pipe(fs.createWriteStream('./dest.txt'))
// .on('close',()=> {console.log('Done.')})


const http = require('http');
const net = require('net');
const url = require('url');
const proxy = new http.Server();

proxy.on('connect', (request, clientSocket, head) => {
    let reqData = url.parse(`http://${request.url}`);
    let remoteSocket = net.connect(reqData.port, reqData.hostname, () => {
        clientSocket.write('HTTP/1.1 200 \r\n\r\n');
        remoteSocket.write(head);
        remoteSocket.pipe(clientSocket);
        clientSocket.pipe(remoteSocket);
    });
}).listen(8080);

let request = http.request({
    port: 8080,
    hostname: 'localhost',
    method: 'CONNECT',
    path: 'www.example.org:80'
});
request.end();

request.on('connect', (res, socket, head) => {
    socket.setEncoding("utf8");
    socket.write('GET / HTTP/1.1\r\nHost: www.example.org:80\r\nConnection: close\r\n\r\n');
    socket.on('readable', () => {
        console.log(socket.read());
    });
    socket.on('end', () => {
        proxy.close();
    });
});