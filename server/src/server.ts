import { fastify } from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Server'
})

app.listen({
  port: 3333,
}).then(()=>{
  console.log('HTTP Server On')
})