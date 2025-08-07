const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

/**
 * @swagger
*   /add-product:
 *   get:
 *     summary: Add  Product
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Add new Product
 *       400:
 *         description: Bad request. Invalid input data.
 *       500:
 *         description: Internal server error.
 */
router.get('/add-product', adminController.fetchProducts);


module.exports = router;
