const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  city: String,
});

module.exports = mongoose.model("Contact", contactSchema);
