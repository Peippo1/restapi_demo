const { Router } = require("express");
const {
  getAllUsers,
  addUser,
  updateUserById,
  deleteUser,
  login,
} = require("../controllers/users");
const { hashPassword }= require("../middleware/")
const userRouter = Router();


userRouter.route("/users").get(hashPassword ,getAllUsers).post(addUser);
userRouter.
userRouter.route("/users/:id").patch(hashPassword, updateUserById).delete(deleteUser);
userRouter.post('/users/login', login);


module.exports = {
  userRouter,
};
