const db = require('../config/db');

const getProducts = async () => {
    const pool = await db;
    const result = await pool.request().query('SELECT * FROM product');
    return result.recordset;
};

module.exports = { getProducts };
