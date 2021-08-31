const router = require('express').Router();
const PostController = require('../controllers/post');

router.post('/createPost', PostController.createPost);
router.post('/createPostImg', PostController.createPostWithImage);
router.get('/listPost/:text?', PostController.listOwnPost)
router.get('/listPublicPost/:text?', PostController.listPublicPost);
router.put('/updatePost', PostController.updatePost);
router.put('/deletePost', PostController.deletePost);

module.exports = router;