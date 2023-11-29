const { Router } = require('express');
const router = Router();
const {     listComments, newComment  } = require('../controllers/commentsController');

router.get('/comments/:post_id', listComments);
router.post('/comment/create', newComment);

module.exports = router;