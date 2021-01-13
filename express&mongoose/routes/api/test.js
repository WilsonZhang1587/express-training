const express = require("express");
const router = express.Router();
const test = require("../../models/test");

// Getting All
router.get("/", async (req, res) => {
  try {
    await test.find({}, function(err, data) {
      res.json(data);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Getting One
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});
// Creating One
router.post("/", (req, res) => {});
// Updating One
router.patch("/:id", (req, res) => {});
// Deleting One
router.delete("/:id", (req, res) => {});

module.exports = router;
