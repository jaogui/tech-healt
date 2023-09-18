import { fastify } from 'fastify'
import { getAllNotifications } from './routes/get-notification'

const app = fastify()

app.register(getAllNotifications)

app.listen({
  port: 3333,
}).then(()=>{
  console.log('HTTP Server On')
})