const {
  userRegisterSchema,
  userLoginSchema,
  userUpdateSubscriptionSchema,
} = require("../../schemas");
const { validateBody } = require("../../decorators");

const userRegisterValidate = validateBody(userRegisterSchema);

const userLoginValidate = validateBody(userLoginSchema);

const userUpdateSubscriptionValidate = validateBody(
  userUpdateSubscriptionSchema
);

module.exports = {
  userRegisterValidate,
  userLoginValidate,
  userUpdateSubscriptionValidate,
};
