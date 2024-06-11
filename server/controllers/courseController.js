const Course = require("../models/course");
const User = require("../models/user");

const createCourse = async (req, res) => {
  const { title, description, subject, category, Id } = req.body;
  const imageName = req.files?.image[0]?.filename;
  const videoName = req.files?.video[0]?.filename;
  const srcImage = `http://localhost:5000/images/${imageName}`;
  const srcVideo = `http://localhost:5000/videos/${videoName}`;
  console.log(srcVideo , srcImage);
  try {
    const userRole = await User.findOne({ _id: Id });
    if (userRole.role === "teacher") {
      const course = await Course.create({
        title,
        description,
        subject,
        category,
        thumbnail: imageName,
        video: videoName,
        teacherId: Id,
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
    console.log(error);
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

//in this case it is better to change the flag from active to deleted and not delete it from the database
const DeleteCourse = async (req, res) => {
  const Id = req.params.id;
  console.log(Id);
  try {
    const deleted = await Course.findByIdAndDelete(Id);
    return res.json(deleted);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const UpdateCourse = async (req, res) => {
  // console.log(req.body);
  const { title, subject, category, description } = req.body;
  const Id = req.params.id;
  const imageName = req.files?.image[0]?.filename;
  const videoName = req.files?.video[0]?.filename;
console.log(Id)
  try {
    const updated = await Course.findByIdAndUpdate(Id, {
      title: title,
      subject: subject,
      category: category,
      description: description,
      thumbnail: imageName,
      video: videoName,
    });
    console.log("updated", updated)
    return res.json(updated);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createCourse,
  getAllCourses,
  getTeacherCourses,
  getCourse,
  DeleteCourse,
  UpdateCourse,
};
