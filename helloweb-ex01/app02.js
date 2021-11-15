const http = require('http')
const fs = require('fs')
const port = 8080;

const server = http.createServer((req,res) => {
    console.log(req.url)

    if(req.url === '/'){
        req.url = '/index.html'
    }

    fs.readFile(`${__dirname}/public/${req.url}`, (err, data) => {
        if(err) console.error(err)

        let contentType = 'text/html'
        res
            .writeHead(200, {
                'Content-Type' : contentType
            })
            .end(data)
    })
})

server.listen(port, () => console.log(`http server running on ${port}`))