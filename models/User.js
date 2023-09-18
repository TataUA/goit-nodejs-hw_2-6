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
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

userSchema.post("save", handleSaveErr);

userSchema.pre("findOneAndUpdate", runValidateAtUpdate);

userSchema.post("findOneAndUpdate", handleSaveErr);

const User = model("user", userSchema);

module.exports = User;
