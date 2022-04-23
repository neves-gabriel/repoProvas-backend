import { prisma } from "../database.js";
import { CreateUserData } from "../services/userService.js";

async function findAll() {
  return prisma.user.findMany();
}

async function findById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}

async function findByEmail(email: string) {
  return prisma.user.findFirst({
    where: { email },
  });
}

async function insert(createUserData: CreateUserData) {
  await prisma.user.create({
    data: createUserData,
  });
}

export default {
  findAll,
  findById,
  findByEmail,
  insert,
};
