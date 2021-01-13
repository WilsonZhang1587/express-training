const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  data: {
    type: Object
  }
});

module.exports = mongoose.model("test", testSchema);
