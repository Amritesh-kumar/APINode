// const request = require('supertest');
// const { expect } = require('chai');
// const sinon = require('sinon');
// const app = require('../src/app');
// const { addUser, getUsers } = require('../src/models/userModel');

// describe('User Routes Tests', () => {
//     afterEach(() => {
//         sinon.restore();
//     });

//     it('should add a user via POST /api/users', async () => {
//         sinon.stub(addUser).resolves();

//         const response = await request(app).post('/api/users').send({ id: 1, name: 'John Doe' });

//         expect(response.status).to.equal(201);
//         expect(response.body.message).to.equal('User added successfully!');
//         expect(addUser.calledOnceWith(1, 'John Doe')).to.be.true;
//     });

//     it('should fetch all users via GET /api/users', async () => {
//         const mockUsers = [{ id: 1, name: 'John Doe' }];
//         sinon.stub(getUsers).resolves(mockUsers);

//         const response = await request(app).get('/api/users');

//         expect(response.status).to.equal(200);
//         expect(response.body).to.deep.equal(mockUsers);
//         expect(getUsers.calledOnce).to.be.true;
//     });
// });
