import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";


interface AppointmentData{
  nameClient: string;
  idUser: string;
  description: string;
  dateAppointment:  string;
  timeAppointment: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialization: string;

}
export async function newAppointment(app: FastifyInstance){
  app.post('/appointment', async (request, reply) => {
    const { nameClient, idUser, description, dateAppointment, timeAppointment, doctorId, doctorName, doctorSpecialization } = request.body as AppointmentData;

    //Busca dados do médico pelo ID
    const doctor = await prisma.doctors.findUnique({
      where: { id: doctorId },
    });
    if (!doctor) {
      return reply.status(400).send({ message: 'Médico não encontrado' });
    }

    const newAppointment = await prisma.appointment.create({
      data:{
        nameClient,
        idUser,
        description,
        dateAppointment,
        timeAppointment,
        doctorId,
        doctorName: doctor.nameDoctor,
        doctorSpeclialization: doctor.specialization
      }
    })
    return newAppointment
  })
}