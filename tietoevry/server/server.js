const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data.json')
const middlewares = jsonServer.defaults()

router.render = (req, res) => {
  if (Math.random() < 0.5) res.status(500).jsonp({
    error: "error message here"
  })
}

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})
