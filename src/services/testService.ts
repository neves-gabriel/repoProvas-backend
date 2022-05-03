import testRepository from "../repositories/testRepository.js";
import { Test } from "@prisma/client";

export type CreateTestData = Omit<Test, "id">;

async function updateViewCount(id) {
  const test = await testRepository.findById(id);
  if (!test) throw { type: "conflict", message: "Test does not exist" };

  await testRepository.updateViewCount(id);
}

async function insert(createTestData: CreateTestData) {
  await testRepository.insert(createTestData);
}

export default {
  updateViewCount,
  insert,
};
