const port = 8080;
const http = require('http')
const server = http.createServer((req, res) => {
    const body = 'hello world';
    res
        .writeHead(200, {
            'Content-Type': 'text/html',
        })
        .end(`<h1>${body}</h1>`);
})
server.listen(port, () => {
    console.log(`http server running on ${port}`)
})