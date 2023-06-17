import Joi from "joi";

const SignupSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "이메일 형식이 올바르지 않습니다.",
    }),
  username: Joi.string().min(3).max(20).required(),
  password: Joi.string().min(6).required(),
  passwordConfirm: Joi.any().valid(Joi.ref("password")).required(),
});

export default SignupSchema;
