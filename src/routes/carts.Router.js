import {Router} from 'express';
import { readCarts, writeCarts } from './utils';
const router = new Router();

router.get('/:cartId',(req, res) => {
    const carts = readCarts();
    const cartId = parseInt(req.params.cartId)
    const cartFind = carts.find(cart => cart.id === cartId);
    if (!cartFind) {
        return res.status(404).send({error: 'Cart not found'});
    }
    res.send(cartFind);
})
router.post('/',(req, res) => {
    const carts = readCarts();
    const idUnique = Math.floor(Math.random()*100 + 1) + carts.length;
    const newCart = {
        id: idUnique,
        products: []
    }
    carts.push(newCart);
    writeCarts(carts);
    res.status(201).send({ message: 'Carrito creado exitosamente.', cart: newCart });
})
router.post('/:cartId/product/:produtcId',(req, res) => {
    const cartId = parseInt(req.params.cartId)
    const productId = parseInt(req.params.productId)
    const carts = readCarts();
    const cartFind = carts.find(cart => cart.id === cartId);
    if (!cartFind) {
        return res.status(404).send({error: 'Cart not found'});
    }
    const productFind = cartFind.products.find(product => product.id === productId);
    if (productFind) {
        productFind.quantity += 1;
    }else {
        carts.products.push({product: productId, quantity: 1})
    }
    writeCarts(carts);
    res.status(200).send({
        message: `Producto con id ${productFind} agregado al carrito con id ${cartFind}.`,
        cart: cartFind
    });
})
export default router;