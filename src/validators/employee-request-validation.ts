import Joi from "joi";
import { Gender } from "../defs/interfaces/Employee";

export const createEmployeeValidation = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    gender: Joi.string().valid(Gender.Male, Gender.Female).required(),
});

export const updateEmployeeValidation = Joi.object().keys({
    id: Joi.string().required(),
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    email: Joi.string().email().optional(),
    phoneNumber: Joi.string().optional(),
    photo: Joi.string().optional(),
    gender: Joi.string().valid(Gender.Male, Gender.Female).optional()
});

