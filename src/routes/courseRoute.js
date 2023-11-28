const {
  allCourses,
  postCourse,
  getCourse,
  putCourse,
  removeCourse,
} = require("../controllers/courseController");

const router = require("express").Router();
router.get("/all", allCourses);
router.post("/new", postCourse);
router.get("/:id", getCourse);
router.put("/:id/edit", putCourse);
router.delete("/:id/delete", removeCourse);

module.exports = router;
