// backend/models/Poll.js

const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pollType: {
    type: String,
    enum: ["Multiple choice", "Ranking poll"],
    default: "Multiple choice",
  },
  options: [
    {
      text: String,
      votes: { type: Number, default: 0 },
    },
  ],
  settings: {
    requireNames: { type: Boolean, default: false },
    allowComments: { type: Boolean, default: false },
    closeOnSchedule: { type: Boolean, default: false },
  },
  // Optionally, you can store the voter's name and comment
  // votes: [
  //   {
  //     name: String,
  //     comment: String,
  //     selectedOption: String,
  //   },
  // ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Poll", pollSchema);
