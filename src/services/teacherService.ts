import teacherRepository from "../repositories/teacherRepository.js";

async function findAll() {
  return teacherRepository.findAll();
}

async function findById(id: number) {
  const teacher = await teacherRepository.findById(id);
  if (!teacher) throw { type: "not_found" };

  return teacher;
}

export default {
  findAll,
  findById,
};
