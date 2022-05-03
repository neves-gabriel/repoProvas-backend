import { prisma } from "../database.js";

async function findAll() {
  return prisma.teacherDiscipline.findMany({
    include: {
      discipline: true,
      teacher: true,
    },
  });
}

async function findById(id: any) {
  return prisma.teacherDiscipline.findUnique({
    where: { id },
  });
}

export default {
  findAll,
  findById,
};
