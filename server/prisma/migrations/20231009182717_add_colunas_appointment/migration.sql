/*
  Warnings:

  - You are about to drop the column `idUser` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `cpfClient` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateClient` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeAppointment` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valueAppointment` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameClient" TEXT NOT NULL,
    "cpfClient" TEXT NOT NULL,
    "dateClient" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateAppointment" TEXT NOT NULL,
    "timeAppointment" TEXT NOT NULL,
    "valueAppointment" TEXT NOT NULL,
    "typeAppointment" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "doctorName" TEXT NOT NULL,
    "doctorSpeclialization" TEXT NOT NULL,
    CONSTRAINT "Appointment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Appointment" ("dateAppointment", "description", "doctorId", "doctorName", "doctorSpeclialization", "id", "nameClient", "timeAppointment") SELECT "dateAppointment", "description", "doctorId", "doctorName", "doctorSpeclialization", "id", "nameClient", "timeAppointment" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
