/*
  Warnings:

  - Added the required column `doctorId` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameClient" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateAppointment" TEXT NOT NULL,
    "timeAppointment" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    CONSTRAINT "Appointment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Appointment" ("dateAppointment", "description", "id", "idUser", "nameClient", "timeAppointment") SELECT "dateAppointment", "description", "id", "idUser", "nameClient", "timeAppointment" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
