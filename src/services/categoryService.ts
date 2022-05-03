import categoryRepository from "../repositories/categoryRepository.js";

async function findAll() {
  return categoryRepository.findMany();
}

async function findById(id: number) {
  const category = await categoryRepository.findById(id);
  if (!category) throw { type: "not_found" };

  return category;
}

export default {
  findAll,
  findById,
};
