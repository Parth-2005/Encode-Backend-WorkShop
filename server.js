const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const productRoutes = require('./Routes/productRoutes');

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT);
    })
}).catch(err => console.error(err));

app.use('/api/products', productRoutes)