const {
  contactAddSchema,
  contactUpdateFavoriteSchema,
} = require("../../schemas");
const { validateBody } = require("../../decorators");

const addContactValidate = validateBody(contactAddSchema);

const updateContactFavoriteValidate = validateBody(contactUpdateFavoriteSchema);

module.exports = {
  addContactValidate,
  updateContactFavoriteValidate,
};
