const { Schema, model } = require("mongoose");
const { handleSaveErr, runValidateAtUpdate } = require("../models/hooks");
const { emailFieldRegEx } = require("../helpers");

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: emailFieldRegEx,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Password is required"],
    },
    avatarURL: {
      type: String,
      required: [true, "AvatarURL is required"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false }
);

userSchema.post("save", handleSaveErr);

userSchema.pre("updateOne", runValidateAtUpdate);

userSchema.post("findOneAndUpdate", handleSaveErr);

const User = model("user", userSchema);

module.exports = User;
