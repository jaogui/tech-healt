import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { getAllNotifications } from './routes/get-notification'
import { newAppointment } from './routes/new-appointment'
import { getAllAppointments } from './routes/get-appointments'
import { getAllDoctors } from './routes/get-doctors'

const app = fastify()
app.register(fastifyCors, {
  origin: '*',
})

app.register(getAllNotifications)
app.register(newAppointment)
app.register(getAllAppointments)
app.register(getAllDoctors)

app.listen({
  port: 3333,
}).then(()=>{
  console.log('HTTP Server On')
})