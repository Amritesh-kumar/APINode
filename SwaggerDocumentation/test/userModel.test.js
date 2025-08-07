//const chai = require('chai');
const sinon = require('sinon');
const sql = require('mssql');
const { addUser, getUsers, getUserById } = require('../src/models/userModel');
const { db, mockRequest } = require('./mocks/dbMock');

let chai, expect;

before(async () => {
    chai = await import('chai');
    expect = chai.expect;
});

describe('User Model Tests', () => {
    let poolMock;
    let requestMock;

    beforeEach(() => {
        requestMock = {
            input: sinon.stub().returnsThis(),
            query: sinon.stub(),
        };
    
        poolMock = {
            request: sinon.stub().returns(requestMock),
        };
    
        sinon.stub(sql, 'connect').resolves(poolMock); // Stub sql.connect to return poolMock
    });

    
    afterEach(() => {
        sinon.restore(); // Restore all stubs after each test
    });

    it('should insert a user into the database', async () => {
        requestMock.query.resolves({ rowsAffected: [1] });
        await addUser(1, 'John Doe');
       // console.log('Query call count:', mockRequest.query.callCount);
        //console.log('Query arguments:', mockRequest.query.firstCall.args[0]);
       // expect(requestMock.query.calledWith('INSERT INTO Users (id, name) VALUES (@id, @name)')).to.be.true;
        // Assertions
        expect(requestMock.query.calledOnce).to.be.true;
       // console.log(requestMock.query.calledOnce);
        
        expect(requestMock.query.firstCall.args[0]).to.equal(
            'INSERT INTO Users (id, name) VALUES (@id, @name)'
        );
        //console.log(requestMock.query.firstCall.args[0]);

        
        expect(requestMock.input.calledWith('id', sql.Int, 1)).to.be.true;
        expect(requestMock.input.calledWith('name', sql.NVarChar, 'John Doe')).to.be.true;
    });

    it('should throw an error if the query fails', async () => {
        // Mock query failure
        const error = new Error('Query failed');
        requestMock.query.rejects(error);

        try {
            await addUser(1, 'John Doe');
            throw new Error('Test failed: error not thrown');
        } catch (err) {
            expect(err).to.equal(error); // Ensure the error is propagated
        }
    });
});
