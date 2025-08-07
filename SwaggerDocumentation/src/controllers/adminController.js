const getProducts = require('../models/product');


const fetchProducts = async (req, res) => {
    try {
        const products = await getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

module.exports = { fetchProducts };