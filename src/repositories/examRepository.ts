import { prisma } from "../database.js";

export async function findAllByDiscipline() {
  const exam = await prisma.term.findMany({
    select: {
      id: true,
      number: true,
      discipline: {
        select: {
          id: true,
          name: true,
          teachersDisciplines: {
            include: {
              teacher: true,
              tests: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  });
  return exam;
}
