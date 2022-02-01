const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  movieId: { type: String},
  user_id: { type: String }
});

module.exports = mongoose.model("list", listSchema);
