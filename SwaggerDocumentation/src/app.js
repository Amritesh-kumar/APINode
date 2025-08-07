const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const adminRoutes = require('./routes/adminRoutes');
const path = require("path");
const app = express();


const swaggerUi = require('swagger-ui-express');
const setupSwagger = require('./swagger');

app.use(express.static(path.join(__dirname, "view")));
app.use(express.static(path.join(__dirname, "public")));


// Middleware
app.use(bodyParser.json());
app.use(cors());

app.post('/api/users', userRoutes);
app.get('/api/get/users', userRoutes);
app.get('/api/users/:id', userRoutes);
app.get('/products', productRoutes);
app.get('/add-product', adminRoutes);


app.get('/usergrid', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'userGrid.html'));
});


app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    console.log('Loaded Swagger tags:');
    // console.log('Request headers:', req.headers);
    // console.log('Request body:', req.body);
    next();
});

setupSwagger(app);


module.exports = app;
