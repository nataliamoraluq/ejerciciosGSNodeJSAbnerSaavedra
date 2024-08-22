const http = require("http");
const port = 3000;

const server = http.createServer((request, response) => {
    const users = [
    { name: 'Ur ass', age: 2580 }
    ]
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(users));
    });
    server.listen(port, () => {
    console.log(`Server listens on port ${port}`);
});