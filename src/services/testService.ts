import testRepository from "../repositories/testRepository.js";

async function updateViewCount(id) {
  const test = await testRepository.findById(id);
  if (!test) throw { type: "conflict", message: "Test does not exist" };

  await testRepository.updateViewCount(id);
}

export default {
  updateViewCount,
};
