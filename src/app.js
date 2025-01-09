const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');


const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "view")));
app.use(express.static(path.join(__dirname, "public")));

app.post('/api/users', userRoutes);
app.get('/api/get/users', userRoutes);
app.get('/api/users/:id', userRoutes);

app.get('/usergrid', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'userGrid.html'))
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;