const {
  userRegisterSchema,
  userLoginSchema,
  userUpdateSubscriptionSchema,
  userEmailSchema,
} = require("../../schemas");
const { validateBody } = require("../../decorators");

const userRegisterValidate = validateBody(userRegisterSchema);

const userLoginValidate = validateBody(userLoginSchema);

const userUpdateSubscriptionValidate = validateBody(
  userUpdateSubscriptionSchema
);

const userEmailValidate = validateBody(userEmailSchema);

module.exports = {
  userRegisterValidate,
  userLoginValidate,
  userUpdateSubscriptionValidate,
  userEmailValidate,
};
