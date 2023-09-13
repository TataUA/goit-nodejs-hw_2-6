const { Schema, model } = require("mongoose");
const { handleSaveErr, runValidateAtUpdate } = require("../models/hooks");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

contactSchema.post("save", handleSaveErr);

contactSchema.pre("findOneAndUpdate", runValidateAtUpdate);

contactSchema.post("findOneAndUpdate", handleSaveErr);

const Contact = model("contact", contactSchema);

module.exports = Contact;
