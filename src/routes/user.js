const { Router } = require("express");
const {
  getMyProfile,
  addUser,
  updateUserById,
  deleteUser,
  login,
} = require("../controllers/users");
const { hashPassword, auth }= require("../middleware/")
const userRouter = Router();


userRouter.get("/users/myprofile", getMyProfile);
userRouter.post("/users", auth ,hashPassword, addUser);
userRouter.patch("/users/:id", auth ,hashPassword, updateUserById);
userRouter.delete("/users/:id", auth, deleteUser);
userRouter.post("/users/login",  login);

// So fresh and so clean as below:
// userRouter.route("/users").get(getAllUsers).post(addUser);
// userRouter.
// userRouter.route("/users/:id").patch(updateUserById).delete(deleteUser);

module.exports = {
  userRouter,
};
