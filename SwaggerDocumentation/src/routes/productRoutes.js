const express = require('express');
const { fetchProducts } = require('../controllers/adminController');

const router = express.Router();

/**
 * @swagger
*   /products:
 *   get:
 *     summary: Fetch all Products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: List of all Products
 */
router.get('/products', fetchProducts);

module.exports = router;



