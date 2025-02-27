const Joi = require("joi");
const {
  nameFieldRegEx,
  emailFieldRegEx,
  phoneFieldRegEx,
} = require("../helpers");

const contactAddSchema = Joi.object({
  name: Joi.string().required().pattern(new RegExp(nameFieldRegEx)).messages({
    "string.pattern.base": ` Name must have only letters and digits`,
    "any.required": `missing required 'name' field`,
  }),
  email: Joi.string().required().pattern(new RegExp(emailFieldRegEx)).messages({
    "any.required": `missing required 'email' field`,
  }),
  phone: Joi.string().required().pattern(new RegExp(phoneFieldRegEx)).messages({
    "string.pattern.base": ` Phone number must have 10 digits`,
    "any.required": `missing required 'phone' field`,
  }),
  favorite: Joi.boolean().default(false),
});

const contactUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().default(false).required().messages({
    "any.required": `missing required 'favorite' field`,
  }),
});

module.exports = { contactAddSchema, contactUpdateFavoriteSchema };
