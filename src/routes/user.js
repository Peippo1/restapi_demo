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

userRouter.get("/users", getAllUsers);
userRouter.post("/users", hashPassword, addUser);
userRouter.patch("/users/:id", hashPassword, updateUserById);
userRouter.delete("/users/:id", deleteUser);
userRouter.post("/users/login", login);

// So fresh and so clean as below:
// userRouter.route("/users").get(getAllUsers).post(addUser);
// userRouter.
// userRouter.route("/users/:id").patch(updateUserById).delete(deleteUser);


module.exports = {
  userRouter,
};
