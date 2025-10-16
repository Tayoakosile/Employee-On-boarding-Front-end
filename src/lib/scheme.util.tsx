import Joi from "joi";

export const userSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(8).max(30).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d!@#$%^&*()_+\\-=]{8,30}$')).required()
});
export const loginUserSchema = Joi.object({

    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(8).max(30).required()
});