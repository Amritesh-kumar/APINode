const {getUsers, addUser } = require('../models/userModel');

const fetchUsers = async (req, res) =>{
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: 'Error fetching users', error});
    }
};


const createUser = async (req, res) => {
    try {
        const {id, name} = req.body;
        await addUser(id, name);
        res.status(201).json({message: 'User added'});
    } catch (error) {
        res.status(500).json({message: 'Error adding user ', error});        
    }
    
};

module.exports = {createUser, fetchUsers};