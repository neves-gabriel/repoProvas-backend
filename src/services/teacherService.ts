import teacherRepository from "../repositories/teacherRepository.js";

async function findAll() {
  return teacherRepository.findAll();
}

export default {
  findAll,
};
