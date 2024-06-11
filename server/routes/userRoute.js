const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const protected =require("../middlewares/Protected")
const uploadSingle  = require('../middlewares/handleImage');
const { uploadImage, uploadVideo } = require('../middlewares/handleImage');

router.post('/api/users', userController.CreateUser);
router.get('/api/users/:id', uploadImage, userController.getOneUser);
router.get("/protected", userController.protected);
router.post("/api/usersLogin", userController.UserLogin);
router.get("/api/getAllTeachers", userController.getAllTeachers);
router.get("/api/getAllStudents", userController.getAllStudents);

module.exports = router;