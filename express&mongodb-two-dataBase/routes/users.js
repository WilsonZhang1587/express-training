var express = require('express');
var router = express.Router();

const tests = require("../Schemas");
const tests2 = require("../Schemas2");

/* GET users listing. */
router.get('/test', async (req, res, next) => {
  try {
    const test = await tests.find();
    res.json(test);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/testt', async (req, res, next) => {
  try {
    const test2 = await tests2.find();
    res.json(test2);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
