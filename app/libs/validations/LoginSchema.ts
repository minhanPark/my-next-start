import Joi from "joi";

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "이메일 형식이 올바르지 않습니다.",
    }),
  password: Joi.string().min(6).required(),
  remember: Joi.boolean(),
});

export default schema;
