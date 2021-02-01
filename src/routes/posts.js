const {Router} = require('express');
const {Post} = require("../models/Post");
const {getAllPosts, addPost, updatePostById, DeletePostById} = require("../controllers/posts");

const postRouter = Router();



// get all users
postRouter.get("/posts", getAllPosts );


// add a user * try catch and error feedback. 
postRouter.post("/posts",addPost); 

// this is the route to update a user > find by ID
postRouter.patch("/posts/:id",updatePostById);  

// this is the route to delete a user > user is found by ID
postRouter.delete("/posts/:id", DeletePostById);

// alternative VERY clean method below

// postRouter.route("/posts")
// .get(getAllPosts)
// .post(addPost)

// postRouter.route("/posts/:id")
// .patch(updatePostById)
// .delete(DeletePostById)

module.exports = {
    postRouter,
};