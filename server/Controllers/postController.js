const Post = require('../models/postModel');

exports.getPosts = async (req, resp, next) => {

    try {
        const posts = await Post.find();

        if (posts) {

            return resp.status(200).json({
                message: success,
                posts
            })
        }
        return resp.status(404).json({
            message: 'No Posts Found',

        })
    } catch (error) {
        return resp.status(400).json({
            message: error.message,
        })
    }
}

// Creating Function to create Post

exports.createPost = async (req, resp, next) => {
    const { title, message, creator, tags } = req.body;
    // console.log(req.body);
    try {
        
        const post = await Post.create({
            title, message, creator, tags
        });

        return resp.status(201).json({
            message: 'Post Created',
            post
        })
    } catch (error) {
        return resp.status(400).json({
            message: error.message
        })
    }
}