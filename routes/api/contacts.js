const express = require("express");
const {
  isValidId,
  addContactValidate,
  updateContactFavoriteValidate,
} = require("../../middlewares/validation/index");
const contactsControllers = require("../../controllers/contacts-controllers.js");

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAll);

contactsRouter.get("/:contactId", isValidId, contactsControllers.getById);

contactsRouter.post("/", addContactValidate, contactsControllers.addNew);

contactsRouter.put(
  "/:contactId",
  isValidId,
  addContactValidate,
  contactsControllers.updateById
);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  updateContactFavoriteValidate,
  contactsControllers.updateStatusContact
);

 contactsRouter.delete("/:contactId",isValidId, contactsControllers.deleteById);

module.exports = contactsRouter;
