import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllAppointments(app: FastifyInstance){
  app.get('/appointment', async ()=>{
    const response = await prisma.appointment.findMany()
    return response; 
  })
}