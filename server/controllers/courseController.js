const Course = require("../models/course");
const User = require("../models/user");

const createCourse = async (req, res) => {
  const { title, description, subject, category, Id } = req.body;
  const image = req.filePaths[0];
  const video = req.filePaths[1];
  try {
    const userRole = await User.findOne({ _id: Id });
    if (userRole.role === "teacher") {
      const course = await Course.create({
        title,
        description,
        subject,
        category,
        thumbnail: image,
        video: video,
        teacherId : Id
      });
      return res.json(course);
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    return res.json(courses);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message });
  }
};

const getTeacherCourses = async (req, res) => {
  const Id = req.params.id;
  try {
    const courses = await Course.find({ teacherId: Id });
    return res.json(courses);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getCourse = async (req, res) => {
  const Id = req.params.id;
  try {
    const course = await Course.findOne({ _id: Id });
    return res.json(course);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createCourse,
  getAllCourses,
  getTeacherCourses,
  getCourse,
};
