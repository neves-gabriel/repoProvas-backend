import { prisma } from "../database.js";

async function findAll() {
  return prisma.test.findMany();
}

async function findById(id: any) {
  return prisma.test.findUnique({
    where: { id },
  });
}

async function updateViewCount(id: any) {
  return prisma.test.update({
    where: { id },
    data: {
      viewCount: {
        increment: 1,
      },
    },
  });
}

export default {
  findAll,
  findById,
  updateViewCount,
};
