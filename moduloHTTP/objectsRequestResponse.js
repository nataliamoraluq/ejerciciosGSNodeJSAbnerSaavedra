const http = require("http");
const port = 3001;

const server = http.createServer((request, response) => {
    const ip = request.socket.remoteAddress;
    const url = request.url;
    const headers = request.headers;
    const cookies = request.headers?.cookie;
    console.log("IP: ",ip);
    console.log("URL: ",url);
    console.log("Headers: ",headers);
    console.log("Cookies: ", cookies);
    response.end();
});

server.listen(port, () => {
 console.log(`Server listens on port ${port}`);
});