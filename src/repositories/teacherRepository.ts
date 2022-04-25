import { prisma } from "../database.js";

export async function findAllByTeacher() {
  const teachers = await prisma.teacher.findMany({
    select: {
      name: true,
      teacherDisciplines: {
        include: {
          discipline: true,
          tests: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });
  return teachers;
}
