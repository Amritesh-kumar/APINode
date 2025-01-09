const db = require('../config/db.js');
const sql = require('mssql');

const getUsers = async () => {
    const pool = await db;
    const result = await pool.request().query('SELECT id,name FROM USERS');
    return result.recordset;
};

const getUserById = async (id) => {
    const pool = await db;
    const result = await pool.request()
    .input('id', sql.Int, id)
    .query('SELECT * FROM USERS WHERE id = @id');
    return result.recordset[0];
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

module.exports = {getUsers, addUser, getUserById };