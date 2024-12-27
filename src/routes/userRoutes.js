const express = require('express');
const {createUser, fetchUsers} = require('../controllers/userController');

const router = express.Router();

router.get('/api/get/users', fetchUsers);
router.post('/api/users', createUser);

module.exports = router;