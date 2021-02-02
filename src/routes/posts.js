const {Router} = require('express');
const postRouter = Router();
const {getAllPosts, getPostsByUser, addPost, updatePost, deletePost} = require("../controllers/posts");

// alternative VERY clean method below

postRouter.get("/posts", getAllPosts);
postRouter.get("/posts/:user_id", getPostsByUser);
postRouter.post("/posts/:user_id", addPost);
postRouter.patch("/posts/:id", updatePost);
postRouter.delete("/posts/:id", deletePost);

module.exports = {
    postRouter,
};