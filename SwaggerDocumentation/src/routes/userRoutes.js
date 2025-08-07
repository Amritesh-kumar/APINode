const express = require('express');
const { createUser, fetchUsers, getUser  } = require('../controllers/userController');
//{ addUser, getUsers, getUserById }

const router = express.Router();
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     description: This endpoint allows you to create a new user by providing their id,name and password.
 *     tags: [Default]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *              - id
 *               - name
 *               - password
 *             properties:
 *               id:
 *                 type: int
 *                 description: The id of the user.
 *                 example: 1
 *               name:
 *                 type: string
 *                 description: The name of the user.
 *                 example: John Doe
 *     responses:
 *       201:
 *         description: User created successfully!!.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: int
 *                   description: The unique ID of the created user.
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The name of the created user.
 *                   example: John Doe
 *       400:
 *         description: Bad request. Invalid input data.
 *       500:
 *         description: Internal server error.
 */
router.post('/api/users', createUser); // Add user
/**
 * @swagger
*   /api/get/users:
 *   get:
 *     summary: Fetch all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all users
 */
router.get('/api/get/users', fetchUsers);  // Fetch all users
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user by ID
 *     description: Retrieve details of a user by their unique ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: Integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 */
router.get('/api/users/:id', getUser);

//test
module.exports = router;
