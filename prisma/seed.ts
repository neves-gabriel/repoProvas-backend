import { prisma } from "../src/database.js";

async function seed() {
  await prisma.teacher.upsert({
    where: { name: "John Wayne" },
    update: {},
    create: {
      name: "John Wayne",
    },
  });

  await prisma.teacher.upsert({
    where: { name: "Judy Trudy" },
    update: {},
    create: {
      name: "Judy Trudy",
    },
  });

  await prisma.teacher.upsert({
    where: { name: "Jim Halpert" },
    update: {},
    create: {
      name: "Jim Halpert",
    },
  });

  await prisma.teacher.upsert({
    where: { name: "Pam Beesly" },
    update: {},
    create: {
      name: "Pam Beesly",
    },
  });

  await prisma.category.upsert({
    where: { name: "P1" },
    update: {},
    create: {
      name: "P1",
    },
  });

  await prisma.category.upsert({
    where: { name: "P2" },
    update: {},
    create: {
      name: "P2",
    },
  });

  await prisma.category.upsert({
    where: { name: "P3" },
    update: {},
    create: {
      name: "P3",
    },
  });

  await prisma.category.upsert({
    where: { name: "P4" },
    update: {},
    create: {
      name: "P4",
    },
  });

  await prisma.term.upsert({
    where: { number: 1 },
    update: {},
    create: {
      number: 1,
    },
  });

  await prisma.term.upsert({
    where: { number: 2 },
    update: {},
    create: {
      number: 2,
    },
  });

  await prisma.term.upsert({
    where: { number: 3 },
    update: {},
    create: {
      number: 3,
    },
  });

  await prisma.term.upsert({
    where: { number: 4 },
    update: {},
    create: {
      number: 4,
    },
  });

  await prisma.term.upsert({
    where: { number: 5 },
    update: {},
    create: {
      number: 5,
    },
  });

  await prisma.discipline.upsert({
    where: { name: "Cálculo 1" },
    update: {},
    create: {
      name: "Cálculo 1",
      termId: 1,
    },
  });

  await prisma.discipline.upsert({
    where: { name: "Física 1" },
    update: {},
    create: {
      name: "Física 1",
      termId: 1,
    },
  });

  await prisma.discipline.upsert({
    where: { name: "Álgebra Linear" },
    update: {},
    create: {
      name: "Álgebra Linear",
      termId: 2,
    },
  });

  await prisma.discipline.upsert({
    where: { name: "Funções de Variáveis Complexas" },
    update: {},
    create: {
      name: "Funções de Variáveis Complexas",
      termId: 2,
    },
  });

  await prisma.discipline.upsert({
    where: { name: "Equações Diferenciais Ordinárias" },
    update: {},
    create: {
      name: "Equações Diferenciais Ordinárias",
      termId: 3,
    },
  });

  await prisma.discipline.upsert({
    where: { name: "Circuitos Elétricos 1" },
    update: {},
    create: {
      name: "Circuitos Elétricos 1",
      termId: 3,
    },
  });

  await prisma.discipline.upsert({
    where: { name: "Ciências do Meio Ambiente" },
    update: {},
    create: {
      name: "Ciências do Meio Ambiente",
      termId: 4,
    },
  });

  await prisma.teacherDiscipline.upsert({
    where: { id: 1 },
    update: {},
    create: {
      disciplineId: 1,
      teacherId: 1,
    },
  });

  await prisma.teacherDiscipline.upsert({
    where: { id: 2 },
    update: {},
    create: {
      disciplineId: 2,
      teacherId: 2,
    },
  });

  await prisma.teacherDiscipline.upsert({
    where: { id: 3 },
    update: {},
    create: {
      disciplineId: 3,
      teacherId: 1,
    },
  });

  await prisma.teacherDiscipline.upsert({
    where: { id: 4 },
    update: {},
    create: {
      disciplineId: 4,
      teacherId: 3,
    },
  });

  await prisma.teacherDiscipline.upsert({
    where: { id: 5 },
    update: {},
    create: {
      disciplineId: 5,
      teacherId: 4,
    },
  });

  await prisma.teacherDiscipline.upsert({
    where: { id: 6 },
    update: {},
    create: {
      disciplineId: 6,
      teacherId: 2,
    },
  });

  await prisma.teacherDiscipline.upsert({
    where: { id: 7 },
    update: {},
    create: {
      disciplineId: 7,
      teacherId: 3,
    },
  });
}

seed()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
