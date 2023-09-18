const express = require("express");
const authenticate = require("../../middlewares/authenticate");
const {
  isValidId,
  addContactValidate,
  updateContactFavoriteValidate,
} = require("../../middlewares/validation");
const contactsControllers = require("../../controllers/contacts-controllers");

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

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

contactsRouter.delete("/:contactId", isValidId, contactsControllers.deleteById);

module.exports = contactsRouter;
