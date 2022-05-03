import disciplineRepository from "../repositories/disciplineRepository.js";

async function findAll() {
  return disciplineRepository.findMany();
}

async function findById(id: number) {
  const discipline = await disciplineRepository.findById(id);
  if (!discipline) throw { type: "not_found" };

  return discipline;
}

export default {
  findAll,
  findById,
};
