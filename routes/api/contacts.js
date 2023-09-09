const express = require("express");
const addContactValidate = require("../../middlewares/validation/contact-validation.js");
const contactsControllers = require("../../controllers/contacts-controllers.js");

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAll);

contactsRouter.get("/:contactId", contactsControllers.getById);

contactsRouter.post("/", addContactValidate, contactsControllers.addNew);

contactsRouter.put("/:contactId", addContactValidate, contactsControllers.updateById);

contactsRouter.delete("/:contactId", contactsControllers.deleteById);

module.exports = contactsRouter;
