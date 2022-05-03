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

async function findById(id: any) {
  return prisma.teacher.findUnique({
    where: { id },
  });
}

export default {
  findAll,
  findById,
};
