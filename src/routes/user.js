const {Router} = require('express');
const {User} = require("../models/User");
const {getAllUsers, addUser, updateUserById, DeleteUserById} = require("../controlers/users");

const userRouter = Router();



// get all users
userRouter.get("/users", getAllUsers );


// add a user * try catch and error feedback. 
userRouter.post("/users",addUser); 

// this is the route to update a user > find by ID
userRouter.patch("/user/:id",updateUserById);  

// this is the route to delete a user > user is found by ID
userRouter.delete("/user/:id", DeleteUserById);

// alternative VERY clean method below

// userRouter.route("/users")
// .get(getAllUsers)
// .post(addUser)

// userRouter.route("/users/:id")
// .patch(updateUserById)
// .delete(DeleteUserById)

module.exports = {
    userRouter,
};