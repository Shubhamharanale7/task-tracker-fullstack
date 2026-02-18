const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: {
        values: ["TODO", "IN_PROGRESS", "DONE"],
        message: "Status must be TODO, IN_PROGRESS, or DONE",
      },
      default: "TODO",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);

