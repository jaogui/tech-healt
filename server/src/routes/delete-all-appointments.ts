import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteAllAppointments() {
  try {
    const deletedAppointments = await prisma.appointment.deleteMany();
    console.log(`Foram excluídos ${deletedAppointments.count} registros de Appointment.`);
  } catch (error) {
    console.error('Erro ao excluir registros de Appointment:', error);
  } finally {
    await prisma.$disconnect();
  }
}

deleteAllAppointments();