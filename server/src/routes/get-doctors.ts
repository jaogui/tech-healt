import { FastifyInstance } from "fastify";
import {prisma} from "../lib/prisma";

export async function getAllDoctors(app: FastifyInstance) {
  app.get('/doctors', async () => {
    const doctors = await prisma.doctors.findMany()
    return doctors
  });
}