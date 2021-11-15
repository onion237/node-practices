const connect = require('connect')
const serveStatic = require('serve-static')
const port = 8080;

const app = connect();
app.listen(port, () => console.log(`http server running on ${port}`))
app.use(serveStatic(__dirname + '/public'))