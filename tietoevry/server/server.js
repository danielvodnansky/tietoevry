const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data.json')
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
  setTimeout(next, 2000);
});

router.render = (req, res) => {
  if (Math.random() < 0.5) {
    res.status(500).jsonp({
      error: "error message here"
    })
  } else {
    res.status(200).jsonp(require('./data.json'))
  }
}

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})
