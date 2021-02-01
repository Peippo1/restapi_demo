const mongoose = require('mongoose')

// blog challenge
const postSchema = new mongoose.Schema({
    // title, content, timestamps (createdAt & updatedAt).
    title: {
        type: String,
        required: true,
    },
    content: {
        type:String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
},
{timestamps: true}
);

const Post = mongoose.model('post',postSchema)

// module.exports = { Post }