import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from 'fs';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const productosFilePath = path.join(__dirname, 'productos.json');
const carritoFilePath = path.join(__dirname, 'carrito.json');

function readProducts() {
    if (fs.existsSync(productosFilePath)) {
        const data = fs.readFileSync(productosFilePath, 'utf8');
        return JSON.parse(data);
    } else {
        return [];
    }
}

function writeProducts(products) {
    fs.writeFileSync(productosFilePath, JSON.stringify(products, null, 2), 'utf8');
}

function readCarts() {
    if (fs.existsSync(carritoFilePath)) {
        const data = fs.readFileSync(carritoFilePath, 'utf8');
        return JSON.parse(data);
    } else {
        return [];
    }
}

function writeCarts(carts) {
    fs.writeFileSync(carritoFilePath, JSON.stringify(carts, null, 2), 'utf8');
}
export { readProducts, writeProducts, readCarts, writeCarts };
export default __dirname;