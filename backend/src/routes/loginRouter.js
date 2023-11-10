const { Router } = require('express');
const router = Router();
const { login } = require('../controllers/loginController');

router.post('/auth', login);

module.exports = router;