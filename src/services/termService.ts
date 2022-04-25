import termRepository from "../repositories/termRepository.js";

async function findAll() {
  return termRepository.findAll();
}

export default {
  findAll,
};
