const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

router.post("/", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json({ message: "Contact saved" });
});

router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

module.exports = router;
