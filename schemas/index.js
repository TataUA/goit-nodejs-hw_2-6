const {
  contactAddSchema,
  contactUpdateFavoriteSchema,
} = require("./contacts-validation");

const {
  userRegisterSchema,
  userLoginSchema,
  userUpdateSubscriptionSchema,
} = require("./users-validation");

module.exports = {
  contactAddSchema,
  contactUpdateFavoriteSchema,
  userRegisterSchema,
  userLoginSchema,
  userUpdateSubscriptionSchema,
};
