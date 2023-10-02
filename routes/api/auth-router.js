const express = require("express");
const {
  userRegisterValidate,
  userLoginValidate,
  userUpdateSubscriptionValidate,
  userEmailValidate,
} = require("../../middlewares/validation");
const authenticate = require("../../middlewares/authenticate");
const upload = require("../../middlewares/upload");
const authControllers = require("../../controllers/auth-controllers");

const authRouter = express.Router();

authRouter.post("/register", userRegisterValidate, authControllers.register);

authRouter.get("/verify/:verificationToken", authControllers.verify);

authRouter.post("/verify", userEmailValidate, authControllers.resendVerify);

authRouter.post("/login", userLoginValidate, authControllers.login);

authRouter.get("/current", authenticate, authControllers.getCurrent);

authRouter.post("/logout", authenticate, authControllers.logout);

authRouter.patch(
  "/",
  authenticate,
  userUpdateSubscriptionValidate,
  authControllers.updateSubscription
);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatarURL"),
  authControllers.updateAvatar
);

module.exports = authRouter;
