import { prisma } from "../database.js";

async function findMany() {
  return prisma.category.findMany();
}

async function findById(id: any) {
  return prisma.category.findUnique({
    where: { id },
  });
}

export default {
  findMany,
  findById,
};
