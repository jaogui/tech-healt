import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { getAllNotifications } from './routes/get-notification'
import { newAppointment } from './routes/new-appointment'

const app = fastify()
app.register(fastifyCors, {
  origin: '*',
})
app.register(getAllNotifications)
app.register(newAppointment)

app.listen({
  port: 3333,
}).then(()=>{
  console.log('HTTP Server On')
})