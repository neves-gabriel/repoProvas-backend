import userBodyFactory from "./userBodyFactory.js";
import userFactory from "./userFactory.js";
import jwt from "jsonwebtoken";
import { faker } from "@faker-js/faker";

export async function tokenFactory() {
  const user = userBodyFactory();
  const createdUser = await userFactory(user);

  const token = jwt.sign(
    { id: createdUser.id },
    process.env.JWT_SECRET || "{}"
  );

  return token;
}

export function expiredTokenFactory() {
  return jwt.sign({}, process.env.JWT_SECRET, { expiresIn: 0 });
}

export function randomTokenFactory() {
  const randomNumber = faker.datatype.number({ max: 1000000 });

  const token = jwt.sign({ id: randomNumber }, process.env.JWT_SECRET);

  return token;
}
