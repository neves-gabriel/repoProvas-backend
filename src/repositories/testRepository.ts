import { prisma } from "../database.js";
import { CreateTestData } from "../services/testService.js";

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

async function insert(createTestData: CreateTestData) {
  await prisma.test.create({
    data: createTestData,
  });
}

export default {
  findAll,
  findById,
  updateViewCount,
  insert,
};
