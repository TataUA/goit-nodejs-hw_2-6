const { Schema, model } = require("mongoose");
const { handleSaveErr, runValidateAtUpdate } = require("../models/hooks");
const {
  nameFieldRegEx,
  emailFieldRegEx,
  phoneFieldRegEx,
} = require("../helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      match: nameFieldRegEx,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      match: emailFieldRegEx,
    },
    phone: {
      type: String,
      match: phoneFieldRegEx,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false }
);

contactSchema.post("save", handleSaveErr);

contactSchema.pre("findOneAndUpdate", runValidateAtUpdate);

contactSchema.post("findOneAndUpdate", handleSaveErr);

const Contact = model("contact", contactSchema);

module.exports = Contact;
