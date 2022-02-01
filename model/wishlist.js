const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  movieId: { type: String},
  userId: { type: String }
});

module.exports = mongoose.model("list", listSchema);
