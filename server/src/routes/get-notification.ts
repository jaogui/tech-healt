import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllNotifications(app: FastifyInstance){
  app.get('/notifications', async () => {
    const notifications = await prisma.notifications.findMany()
    return notifications
  })
}