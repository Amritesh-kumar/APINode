const { getUsers, addUser, getUserById  } = require('../models/userModel');

const fetchUsers = async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

const createUser = async (req, res) => {
    try {
        console.log('Received POST request to /api/users');
        const { id, name } = req.body;
        console.log(req.body);
        console.log('Calling addUser with:', id, name);
        await addUser(id, name);
        res.status(201).json({ message: 'User added successfully!' });
    } catch (error) {
        console.error('Error in createUser:', error);
        res.status(500).json({ message: 'Error adding user', error });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports = { createUser, fetchUsers, getUser };


