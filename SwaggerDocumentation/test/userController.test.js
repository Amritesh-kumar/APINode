// const { expect } = require('chai');
// const sinon = require('sinon');
// const { addUser, getUsers } = require('../src/models/userModel');
// const { createUser, fetchUsers } = require('../src/controllers/userController');

// describe('User Controller Tests', () => {
//     afterEach(() => {
//         sinon.restore();
//     });

//     it('should add a user and return success', async () => {
//         const req = { body: { id: 1, name: 'John Doe' } };
//         const res = {
//             status: sinon.stub().returnsThis(),
//             json: sinon.stub(),
//         };

//         sinon.stub(addUser).resolves();

//         await createUser(req, res);

//         expect(addUser.calledOnceWith(1, 'John Doe')).to.be.true;
//         expect(res.status.calledOnceWith(201)).to.be.true;
//         expect(res.json.calledOnceWith({ message: 'User added successfully!' })).to.be.true;
//     });

//     it('should fetch all users and return them', async () => {
//         const req = {};
//         const res = {
//             status: sinon.stub().returnsThis(),
//             json: sinon.stub(),
//         };

//         const mockUsers = [{ id: 1, name: 'John Doe' }];
//         sinon.stub(getUsers).resolves(mockUsers);

//         await fetchUsers(req, res);

//         expect(getUsers.calledOnce).to.be.true;
//         expect(res.status.calledOnceWith(200)).to.be.true;
//         expect(res.json.calledOnceWith(mockUsers)).to.be.true;
//     });
// });
