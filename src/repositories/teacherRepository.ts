import { prisma } from "../database.js";

async function findAll() {
  return prisma.teacher.findMany({
    include: {
      teachersDisciplines: {
        include: {
          tests: true,
          discipline: true,
        },
      },
    },
  });
}

export default {
  findAll,
};
