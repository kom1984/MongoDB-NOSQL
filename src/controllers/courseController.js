const Course = require("../models/courseModel");

const allCourses = async (req, res) => {
  try {
    let courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const postCourse = async (req, res) => {
  const { name, price, isPublish, tags } = req.body;
  try {
    let newCourse = await new Course({name,price,isPublish,tags});
    newCourse.tags = tags ? tags.split(","):[]
    newCourse.save();
    res.json(newCourse);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const getCourse = async (req, res) => {
  try {
    let course = await Course.findOne({ _id: req.params.id });
    res.json(course);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const putCourse = async (req, res) => {
  const { name, price, isPublish, tags } = req.body;
  try {
   const update = {name:name,
    price:price,
    isPublish:isPublish,
    tags:tags ? tags.split(","):[]}
    let course = await Course.findOneAndUpdate(
      { _id: req.params.id },
      update,{new:true},
      //{ name, price, isPublish, tags },
      //course.tags = tags ? tags.split(","):[]
    );
    res.json({ message: "Course updated successfully", course });
  } catch (error) {
    res.json({ message: error.message });
  }
};
const removeCourse = async (req, res) => {
  try {
    let course = await Course.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "Course deleted successfully", deletedCourse: course });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  allCourses,
  postCourse,
  getCourse,
  putCourse,
  removeCourse,
};
