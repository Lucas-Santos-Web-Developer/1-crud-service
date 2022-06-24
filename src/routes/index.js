const router = require('express').Router()
const postControllers = require('../controllers/postsControllers')


router.post('/', postControllers.createPost)

router.get('/', postControllers.getAllPosts)

router.patch('/:id', postControllers.updateOnePost)

router.delete('/:id', postControllers.deleteOnePost)

module.exports = router