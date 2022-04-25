import { prisma } from "../database.js";

async function findAll() {
  return prisma.term.findMany({
    include: {
      disciplines: {
        include: {
          teachersDisciplines: {
            include: {
              teacher: true,
              tests: true,
            },
          },
        },
      },
    },
  });
}

export default {
  findAll,
};
