import { prisma } from "../database.js";
import { CreateUserData } from "../services/userService.js";

async function findById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}
async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

async function insert(createUserData: CreateUserData) {
  return prisma.user.create({
    data: createUserData,
  });
}

export default {
  findByEmail,
  findById,
  insert,
};
