const { mongoose, Schema } = require("mongoose");

const courseSchema = new Schema({
  name: String,
  price: Number,
  isPublish: { type: Boolean, default: false },
  tags: { type: Array, default: [] },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
