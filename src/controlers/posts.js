const {Router} = require('express');
const {Post} = require("../models/Post");
const postRouter = Router();



// get all posts
exports.getAllPosts("/posts", async(req, res) => {
    try {
        const allposts = await Post.find({})
        res.status(200).send(allPosts);
    } catch (error) {
        res.status(500).send(error);
    }
    // this will be the route to get users from the database
    // return all users in an array


    exports.addPost("/posts/:user_id", async (req, res) =>{
    try{
        // old vs prefered
        // const post = new Post(req.body);
        // const savedPost = await User.findById(req.params.user_id);
        // c
        // user.posts.push(post);
        // const returnedValue = await user.save();

        const post = new Post(req.body);
        post.author = req.params.user_id;
        const returnedValue = await user.save();

        res.status(201).send(returnedValue);
    } catch (error) {
        res.status(500).send(error);
    }
});



// this is the route to update a user > find by ID
    exports.updatePostById("/user/:id",  async (req, res) => {
    try{
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        console.log(post);
        res.status(200).send(post);
    } catch (error) {
        res.status(404).send({message: "Post not found"})
    }
    // console.log(req.params);
});
// this is the route to delete a post > user is found by ID
    exports.DeletePostById("/user/:id", async (req, res) => {
    try {
     const post = await Post.findByIdAndDelete(req.params.id);
     res.status(200).send(post);
    } catch (error) {
     res.status(404).send({message: "Post not found"});
    }
 });
});
