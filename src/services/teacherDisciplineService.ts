import teacherDisciplineRepository from "../repositories/teacherDisciplineRepository.js";

async function findAll() {
  return teacherDisciplineRepository.findAll();
}

async function findById(id: number) {
  const teacherDiscipline = await teacherDisciplineRepository.findById(id);
  if (!teacherDiscipline) throw { type: "not_found" };

  return teacherDiscipline;
}

export default {
  findAll,
  findById,
};
