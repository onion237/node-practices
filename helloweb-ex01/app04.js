const connect = require('connect')
const serveStatic = require('serve-static')
const route = require('connect-route')
const port = 8080;

const app = connect();
app.listen(port, () => console.log(`http server running on ${port}`))
app.use(route( (router) => {
    router.get('/', (req, res) => {
        res
        .writeHead(200, {
            'Content-Type' : 'text/html'
        })
        .end('<h1>Main</h1>')        
    })
    router.get('/user', (req, res) => {
        console.dir(req._parsedUrl.query)
        req.query = {};
        params = (req._parsedUrl.query || '').split('&').forEach(param => {
            tokens = param.split('=')
            req.query[tokens[0]] = tokens[1]
        });
        console.dir(req.query)
        res
            .writeHead(200, {
                'Content-Type' : 'text/html'
            })
            .end(`<h1>User No : ${req.query.no}</h1>`)
    })
    router.get('/guestbook', (req, res) => {
        res
            .writeHead(200, {
                'Content-Type' : 'text/html'
            })
            .end('<h1>GuestBook List</h1>')
        
    })
    router.get('/board', (req, res) => {
        res
            .writeHead(200, {
                'Content-Type' : 'text/html'
            })
            .end('<h1>Board List</h1>')
        
    })
    router.get('/board/:no', (req, res) => {
        res
            .writeHead(200, {
                'Content-Type' : 'text/html'
            })
            .end(`<h1>Board View ${req.params.no}</h1>`)
        
    })
}))

app.use(serveStatic(__dirname + '/public'))