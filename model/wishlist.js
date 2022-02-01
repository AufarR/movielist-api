const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  id: { type: String},
  username: { type: String }
});

module.exports = mongoose.model("wishlist", listSchema);
