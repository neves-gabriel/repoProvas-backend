import { prisma } from "../database.js";

async function findMany() {
  return prisma.discipline.findMany();
}

async function findById(id: any) {
  return prisma.discipline.findUnique({
    where: { id },
  });
}

export default {
  findMany,
  findById,
};
