const {
  userRegisterValidate,
  userLoginValidate,
  userUpdateSubscriptionValidate,
  userEmailValidate,
} = require("../../middlewares/validation/user-validation");

const {
  addContactValidate,
  updateContactFavoriteValidate,
} = require("./contact-validation");

const isValidId = require("./isValidId");

module.exports = {
  addContactValidate,
  updateContactFavoriteValidate,
  isValidId,
  userRegisterValidate,
  userLoginValidate,
  userUpdateSubscriptionValidate,
  userEmailValidate,
};
