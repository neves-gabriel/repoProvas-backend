import { CreateTestData } from "../../src/services/testService.js";
import { faker } from "@faker-js/faker";

export function testBodyFactory() {
  const test: CreateTestData = {
    name: faker.lorem.words(),
    pdfUrl: faker.internet.url(),
    categoryId: 1,
    teacherDisciplineId: 2,
    viewCount: 10,
  };

  return test;
}
