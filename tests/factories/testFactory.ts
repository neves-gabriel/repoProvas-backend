import { prisma } from "../../src/database.js";
import { CreateTestData } from "../../src/services/testService.js";

export async function testFactory(test: CreateTestData) {
  const category = await prisma.category.findUnique({
    where: { id: test.categoryId },
  });
  const teacherDiscipline = await prisma.teacherDiscipline.findFirst({
    where: { id: test.teacherDisciplineId },
  });

  return await prisma.test.create({
    data: {
      name: test.name,
      pdfUrl: test.pdfUrl,
      categoryId: category.id,
      teacherDisciplineId: teacherDiscipline.id,
    },
  });
}
