const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const protected =require("../middlewares/Protected")
const { uploadSingle } = require('../middlewares/handleImage');

router.post('/api/users', userController.CreateUser);
router.get('/api/users/:id', uploadSingle, userController.getOneUser);
router.get("/protected", userController.protected);
router.post("/api/usersLogin", userController.UserLogin);

module.exports = router;