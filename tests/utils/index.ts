import { prisma } from "../../src/database.js";
import { Response } from "supertest";

export function expectedResponseToValidToken(response: Response) {
  expect(response.body.length).toBeGreaterThanOrEqual(0);
  expect(response.status).toBe(200);
}

export async function findTestByName(name: string) {
  return await prisma.test.findFirst({
    where: { name },
  });
}
