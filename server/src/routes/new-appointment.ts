import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";


interface AppointmentData{
  nameClient: string;
  cpfClient: string;
  dateClient: string;
  description: string;
  dateAppointment:  string;
  timeAppointment: string;
  valueAppointment: string;
  typeAppointment: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialization: string;

}
export async function newAppointment(app: FastifyInstance){
  app.post('/appointment', async (request, reply) => {
    const { nameClient, cpfClient, dateClient, description, dateAppointment, timeAppointment, valueAppointment, typeAppointment, doctorId, doctorName, doctorSpecialization } = request.body as AppointmentData;

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
        cpfClient,
        dateClient,
        description,
        dateAppointment,
        timeAppointment,
        typeAppointment,
        valueAppointment,
        doctorId,
        doctorName: doctor.nameDoctor,
        doctorSpeclialization: doctor.specialization
      }
    })
    return newAppointment
  })
}