import supertest from "supertest";
import app from "../src/app";
import { prisma } from "../src/database.js";
import { testBodyFactory } from "./factories/testBodyFactory";
import { testFactory } from "./factories/testFactory";
import { findTestByName } from "./utils";

describe("Test tests - POST /test", () => {
  beforeEach(truncateTests);

  afterAll(disconnect);

  it("should return status 201 and persist the test given valid body", async () => {
    const test = testBodyFactory();
    const response = await supertest(app).post("/test").send(test);

    const createdPost = await findTestByName(test.name);

    expect(response.status).toBe(201);
    expect(createdPost).not.toBe(null);
  });

  it("should return status 422 given invalid body", async () => {
    const response = await supertest(app).post("/test").send({});

    expect(response.status).toBe(422);
  });
});

describe("Test tests - PUT /test/:id", () => {
  it("should return status 200 and an object", async () => {
    const test = testBodyFactory();
    const createdTest = await testFactory(test);

    const response = await supertest(app).put(`/test/${createdTest.id}`);

    expect(response.status).toBe(204);
  });
});

async function disconnect() {
  await prisma.$disconnect();
}

async function truncateTests() {
  await prisma.$executeRaw`TRUNCATE TABLE users;`;
}
