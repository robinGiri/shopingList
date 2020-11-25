const express = require("express");
const router = express.Router();

const Items = require("../../models/Items");

// get api/item
router.get("/", (req, res) => {
  Items.find()
    .sort({ date: -1 })
    .then((item) => res.json(item));
});

// post api/item
router.post("/", (req, res) => {
  const newItem = new Items({ name: req.body.name });
  newItem.save().then((item) => res.json(item));
});

// delete api/item
router.delete("/:id", (req, res) => {
  Items.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(400).json({ success: false }));
});

module.exports = router;
