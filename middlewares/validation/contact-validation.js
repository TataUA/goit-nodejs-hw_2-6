const contactAddSchema = require("../../schemas/contacts-validation.js");
const { validateBody } = require("../../decorators");

const addContactValidate = validateBody(contactAddSchema);

module.exports = addContactValidate;
