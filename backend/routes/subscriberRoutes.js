const express = require("express");
const Subscriber = require("../models/Subscriber");
const router = express.Router();

router.post("/", async (req, res) => {
  const sub = new Subscriber(req.body);
  await sub.save();
  res.json({ message: "Subscribed" });
});

router.get("/", async (req, res) => {
  const subs = await Subscriber.find();
  res.json(subs);
});

module.exports = router;
