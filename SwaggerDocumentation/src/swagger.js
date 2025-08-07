const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition  ={
  openapi: '3.0.0',
  info: {
    title: 'Dynamic Swagger API',
    version: '1.0.0',
    description: 'API documentation with dynamic tags and descriptions',
  },
  servers: [
    {
      url: 'http://localhost:3003', // Replace with your server URL
    },
  ], 
  // Order the tags explicitly
  tags: [
    {
      name: 'Default', // Default tag first
      description: 'APIs without specific tags',
    },
    {
      name: 'Admin', // Admin tag comes after Default
      description: 'Admin-related APIs',
    },
    {
      name: 'Users', // User tag comes after Admin
      description: 'User-related APIs',
    },
     {
      name: 'Product', // Product tag comes after Users
      description: 'Product-related APIs',
    },
 ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

// console.log(swaggerSpec.tags);
// console.log('Loaded paths:');
// console.log(Object.keys(swaggerSpec.paths));

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
