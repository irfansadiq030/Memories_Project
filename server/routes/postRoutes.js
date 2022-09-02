const express = require('express');
const router = express.Router();
const { getPosts, createPost } = require('../controllers/postController');

router.get('/', getPosts);
router.route('/create-post').post(createPost);

module.exports = router;