import {Router} from 'express';
import { readProducts, writeProducts } from '../utils.js'
const router = new Router();
//lista todos los productos con limit
router.get('/',(req, res) => {
    const products = readProducts();
    const productLimit = parseInt(req.query.limit);
    if (!isNaN(productLimit)&&productLimit>0) {
        res.send(productLimit.slice(0, productLimit));
    }else {
        res.json(products)
    }
})
router.get('/:productId',(req, res) => {
    const products = readProducts();
    //lista todos los productos por ID
    const productId = parseInt(req.params.productId)
    const product = products.find(p => p.id === productId)
    if (product) {
        console.log('el producto es :');
        res.json(product)
    }else {
        console.log('producto no encontrado');
        
    }
})
//agregar producto
router.post('/',(req, res) => {
    const {title, description, code, price, stock, category, thumbnails} = req.body
    const products = readProducts();
    //validaciones
    if (!title || !description || !code || !price || !stock || !category) {
        return res.status(400).send({error: 'todos los campos son obligatoriios'});
    }
    if (products.some(p => p.code === code)) {
        return res.status(400).send({error: 'producto ya existe'}); //
    }
    //id unico 
    const idUnique = Math.floor(Math.random()*100 + 1) + products.length;
    //crear nuevo producto
    const newProduct = {
        id: idUnique, 
        title, 
        description, 
        code, 
        status: true,
        price, 
        stock, 
        category, 
        thumbnails : thumbnails || []
    }
    products.push(newProduct)
    writeProducts(products);
    res.status(201).json(newProduct);
})


router.put('/:productId',(req, res) => {
    const products = readProducts()
    let productId = parseInt(req.params.productId)
    let productUpdate = req.body
    let productIndex = products.findIndex(p => p.id === productId)
    if (productPosition<0) {
        return res.status(404).send({error: 'producto no encontrado'})
    }
    const updatedProduct = {
     ...products[productIndex], ...productUpdate 
    };
    products[productIndex] = updatedProduct; // Sobrescribir el producto en la lista
    writeProducts(products);
    res.status(200).json({ message: 'producto actualizado exitosamente.', product: updatedProduct });
 });
//eliminar por id 
router.delete('/:productId',(req, res) => {
    const products = readProducts();
    let productId = parseInt(req.params.productId)
    const productPosition = products.findIndex((p =>p.id === productId))
    if (productPosition<0) {
        return res.status(404).send({error: 'producto no encontrado'})
    }
    products.splice(productPosition, 1)
    writeProducts(products);
    res.send({message: 'Producto eliminado'})
})
export default router;