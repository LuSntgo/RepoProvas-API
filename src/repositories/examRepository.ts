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

export async function getAllTests() {

  const data = await prisma.test.findMany(
  )
  return data
}


export async function findDisciplineByTerms() {
const terms = await prisma.term.findMany({
  select: {
    id:true,
    number: true,
    discipline: {
      select: {
        id: true,
        name: true,
        teachersDisciplines: true
      }
    }
  }
})
return terms
}

export async function findTestsByCategory() {
  const tests = await prisma.category.findMany({
select:{
  id:true,
  name: true,
  tests: {
    include: {
      teachersDiscipline: {
        include: {
          teacher: true
        }
      }
    }
  }
}

  })
  return tests
}
