import Joi from "joi";

interface SignUpUser {
    email: string;
    password: string;
    confirmPassword: string;
  }

export const userSignUpSchema = Joi.object<SignUpUser>({
    email: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref("password")
})
