const {Router} = require('express');
const {User} = require("../models/User");
const userRouter = Router();




const getAllUsers = async(req, res) => {
    try {
        const allUsers = await User.find({})
        res.status(200).send(allUsers);
    } catch (error) {
        res.status(500).send(error);
    }
    // this will be the route to get users from the database
    // return all users in an array
    
}

// add users function
exports.AddAllUsers = async (req, res) =>{
    try{
        const user = new User(req.body);
        const savedUser = await user.save();
        // function for new user input
        console.log(req.body);
        res.status(201).send(savedUser);
    } catch (error) {
        res.status(500).send({message: "Could not connect"});
    }
};

exports.updateUserById = async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        console.log(user);
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send({message: "User not found"})
    }
    // console.log(req.params);
};

// 
exports.DeleteUserById = async (req, res) => {
    try {
     const user = await User.findByIdAndDelete(req.params.id);
     res.status(200).send(user);
    } catch (error) {
     res.status(404).send({message: "User not found"});
    }
 };