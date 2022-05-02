import categoryRepository from "../repositories/categoryRepository.js";

async function findAll() {
  return categoryRepository.findMany();
}

export default {
  findAll,
};
