const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const upload = require('../middlewares/uploadMiddleware').upload;

router.post("/api/courses", upload, courseController.createCourse);
router.get("/api/getAllCourses", courseController.getAllCourses);
router.get("/api/getTeacherCourses/:id", courseController.getTeacherCourses);
router.get("/api/getCourse/:id", courseController.getCourse);
router.delete('/api/DeleteCourse/:id', courseController.DeleteCourse);
router.put('/api/UpdateCourse/:id', upload,courseController.UpdateCourse);
module.exports = router;
