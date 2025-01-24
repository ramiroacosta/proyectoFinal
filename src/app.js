import express from 'express';
import productsRouter from './routes/products.Router.js'
import cartsRouter from './routes/carts.Router.js'
import __dirname from './utils.js';
import { readProducts, writeProducts, readCarts, writeCarts } from './utils.js';

const app = express();
const  PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"))
app.use('/api/product', productsRouter);
app.use('/api/cart', cartsRouter);
//ESCUCHA
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})
