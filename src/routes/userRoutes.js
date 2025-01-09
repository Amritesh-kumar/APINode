const express = require('express');
const {createUser, fetchUsers, fetchUserById} = require('../controllers/userController');

const router = express.Router();

router.get('/api/get/users', fetchUsers);
router.post('/api/users', createUser);
router.get('/api/users/:id', fetchUserById);

module.exports = router;