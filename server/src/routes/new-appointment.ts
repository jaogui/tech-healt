import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";


interface AppointmentData{
  nameClient: string;
  idUser: string;
  description: string;
  dateAppointment:  string;
  timeAppointment: string;
  doctorId: string;
}
export async function newAppointment(app: FastifyInstance){
  
  app.post('/appointment', async (request, reply) => {
    const { nameClient, idUser, description, dateAppointment, timeAppointment, doctorId } = request.body as AppointmentData;

    const newAppointment = await prisma.appointment.create({
      data:{
        nameClient,
        idUser,
        description,
        dateAppointment,
        timeAppointment,
        doctorId
      }
    })
    return newAppointment
  })
}