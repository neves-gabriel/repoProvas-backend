import { prisma } from "../database.js";

async function findAll() {
  return prisma.teacher.findMany({
    include: {
      teachersDisciplines: {
        include: {
          tests: {
            include: {
              category: true,
            },
          },
          discipline: true,
        },
      },
    },
  });
}

export default {
  findAll,
};
