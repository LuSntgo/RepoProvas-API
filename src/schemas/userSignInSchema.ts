import Joi from "joi";
import { CreateUserData } from "../services/userService.js";

export const userSignInSchema = Joi.object<CreateUserData>({
    email: Joi.string().required(),
    password: Joi.string().required()
})
