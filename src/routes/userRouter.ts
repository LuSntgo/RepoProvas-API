import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { userSignInSchema } from "../schemas/userSignInSchema.js";
import { userSignUpSchema } from "../schemas/userSignUpSchema.js";



const userRouter = Router();

userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(userSignUpSchema),
  userController.signUp
);

userRouter.post(
  "/sign-in",
  validateSchemaMiddleware(userSignInSchema),
  userController.signIn
);

export default userRouter;
