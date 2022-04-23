import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository.js";

async function findById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw { type: "not_found" };

  return user;
}

export type CreateUserData = Omit<User, "id">;

async function insert(createUserData: CreateUserData) {
  const existingEmail = await userRepository.findByEmail(createUserData.email);
  if (existingEmail)
    throw { type: "conflict", message: "Users must have unique emails" };

  const { password } = createUserData;
  const hashedPassword = bcrypt.hashSync(password, 12);

  await userRepository.insert({ ...createUserData, password: hashedPassword });
}

async function login(loginData: CreateUserData) {
  const user = await userRepository.findByEmail(loginData.email);
  if (!user) throw { type: "unauthorized", message: "Incorrect credentials" };

  validatePasswordOrFail(loginData, user);

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET || "{}"
  );

  return token;
}

function validatePasswordOrFail(loginData: CreateUserData, user: User) {
  const { password } = loginData;
  const isAuthorized = bcrypt.compareSync(password, user.password);
  if (!isAuthorized)
    throw { type: "unauthorized", message: "Incorrect credentials" };
}

export default {
  findById,
  insert,
  login,
};
