const db = require('../config/db.js');
const sql = require('mssql');

const getUsers = async () => {
    const pool = await db;
    const result = await pool.request().query('SELECT * FROM USERS');
    return result.recordset;
};

const addUser = async (id, name) => {
    try {
        const pool = await db;
        const request = await pool.request();

        await request.input('id', sql.Int, id)
            .input('name', sql.NVarChar, name)
            .query('INSERT INTO USERS (id,name) VALUES (@id, @name)');
    } catch (error) {
        console.error('Error in adding user: ',error);
        throw error;

    }
};

module.exports = {getUsers, addUser };