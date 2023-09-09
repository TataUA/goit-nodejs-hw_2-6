const Joi = require("joi");

const nameFieldRegEx = /^[a-zA-Z0-9 ]*$/;
const phoneFieldRegEx = /\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})/;

const contactAddSchema = Joi.object({
  name: Joi.string().required().pattern(new RegExp(nameFieldRegEx)).messages({
    "string.pattern.base": ` Name must have only letters and digits`,
    "any.required": `missing required 'name' field`,
  }),
  email: Joi.string().required().email().messages({
    "any.required": `missing required 'email' field`,
  }),
  phone: Joi.string().required().pattern(new RegExp(phoneFieldRegEx)).messages({
    "string.pattern.base": ` Phone number must have 10 digits`,
    "any.required": `missing required 'phone' field`,
  }),
});

module.exports = contactAddSchema;
