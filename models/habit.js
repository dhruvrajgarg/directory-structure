const mongoose = require("mongoose");

var habitSchema = new mongoose.Schema({
  habit: {
    type: String,
    required: true,
  },
  status: {
    type: Array,
    default: 0,
  },
});

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;
