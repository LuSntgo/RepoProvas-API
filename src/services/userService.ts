import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
// import * as errorsUtils from '../utils/errorsUtils.js';
import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository.js";
dotenv.config();

export type CreateUserData = Omit<User, "id">;
async function insert(createUserData: CreateUserData) {
  const existingUser = await userRepository.findByEmail(createUserData.email);
  if (existingUser)
    throw {
      type: "conflict",
      message: "Users must have unique email addresses.",
    };

  const hashedPassword = bcrypt.hashSync(createUserData.password, 10);
  await userRepository.insert({ ...createUserData, password: hashedPassword });
}



async function signIn({ email, password }: CreateUserData) {
    const user = await userRepository.findByEmail(email);
    if (!user) throw { type: "unauthorized", message: "Invalid credentials" };
  
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid)
      throw { type: "unauthorized", message: "Invalid credentials" };
  
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    return token;
  }
  
  export default {
    insert,
    signIn
  };
  
