/*
  Warnings:

  - You are about to drop the column `PdfUrl` on the `tests` table. All the data in the column will be lost.
  - You are about to drop the `teachersDisciplines` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pdfUrl` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teachersDisciplines" DROP CONSTRAINT "teachersDisciplines_disciplineId_fkey";

-- DropForeignKey
ALTER TABLE "teachersDisciplines" DROP CONSTRAINT "teachersDisciplines_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_teacherDisciplineId_fkey";

-- DropIndex
DROP INDEX "tests_categoryId_key";

-- DropIndex
DROP INDEX "tests_name_key";

-- DropIndex
DROP INDEX "tests_teacherDisciplineId_key";

-- AlterTable
ALTER TABLE "tests" DROP COLUMN "PdfUrl",
ADD COLUMN     "pdfUrl" TEXT NOT NULL;

-- DropTable
DROP TABLE "teachersDisciplines";

-- CreateTable
CREATE TABLE "TeacherDiscipline" (
    "id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "TeacherDiscipline_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TeacherDiscipline" ADD CONSTRAINT "TeacherDiscipline_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherDiscipline" ADD CONSTRAINT "TeacherDiscipline_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teacherDisciplineId_fkey" FOREIGN KEY ("teacherDisciplineId") REFERENCES "TeacherDiscipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
