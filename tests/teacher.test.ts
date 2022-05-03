import supertest from "supertest";
import app from "../src/app";
import { prisma } from "../src/database.js";
import { expiredTokenFactory, tokenFactory } from "./factories/tokenFactory";
import { expectedResponseToValidToken } from "./utils";

describe("Teacher tests - GET /teachers", () => {
  afterAll(disconnect);

  it("should return status 200 and an object given valid token", async () => {
    const token = await tokenFactory();

    const response = await supertest(app)
      .get("/teachers")
      .set("Authorization", `Bearer ${token}`);

    expectedResponseToValidToken(response);
  });

  it("should return status 401 given empty token", async () => {
    const response = await supertest(app).get("/teachers");

    expect(response.status).toBe(401);
  });

  it("should return status 500 given expired token", async () => {
    const token = expiredTokenFactory();

    const response = await supertest(app)
      .get("/teachers")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(500);
  });
});

async function disconnect() {
  await prisma.$disconnect();
}
