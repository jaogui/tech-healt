/*
  Warnings:

  - Added the required column `dateAppointment` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameClient" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateAppointment" TEXT NOT NULL
);
INSERT INTO "new_Appointment" ("description", "id", "idUser", "nameClient") SELECT "description", "id", "idUser", "nameClient" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
