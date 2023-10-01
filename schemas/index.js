const {
  contactAddSchema,
  contactUpdateFavoriteSchema,
} = require("./contacts-validation");

const {
  userRegisterSchema,
  userLoginSchema,
  userUpdateSubscriptionSchema,
  userEmailSchema,
} = require("./users-validation");

module.exports = {
  contactAddSchema,
  contactUpdateFavoriteSchema,
  userRegisterSchema,
  userLoginSchema,
  userUpdateSubscriptionSchema,
  userEmailSchema,
};
