// const sinon = require('sinon');

// const mockQuery = sinon.stub();

// const mockRequest = sinon.stub().returns({
//     query: mockQuery,
// });

// const mockPool = {
//     request: mockRequest,
// };

// const db = sinon.stub().resolves(mockPool);

// module.exports = { db, mockQuery, mockRequest };

// const sinon = require('sinon');

// // Mock the SQL request object
// const mockRequest = {
//     input: sinon.stub().returnsThis(),
//     query: sinon.stub(),
// };

// // Mock the SQL pool object
// const mockPool = {
//     request: sinon.stub().returns(mockRequest),
// };

// // Mock the database connection
// const db = sinon.stub().resolves(mockPool);

// module.exports = { db, mockRequest };

const sinon = require('sinon');

// Mock the SQL request object
const mockRequest = {
    input: sinon.stub().returnsThis(),
    query: sinon.stub(),
};

// Mock the SQL pool object
const mockPool = {
    request: sinon.stub().returns(mockRequest),
};

// Mock the database connection to return the mock pool
const db = sinon.stub().resolves(mockPool);

module.exports = { db, mockRequest };
