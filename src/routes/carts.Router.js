import {Router} from 'express';
import { readCarts, writeCarts } from '../utils.js';
const router = new Router();

router.get('/:cartId',(req, res) => {
    const carts = readCarts();
    const cartId = parseInt(req.params.cartId)
    const cartFind = carts.find(cart => cart.id === cartId);
    if (!cartFind) {
        return res.status(404).send({error: 'Cart not found'});
    }
    res.json(cartFind);
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
    res.status(201).json({ message: 'Carrito creado exitosamente.', cart: newCart });
})
router.post('/:cartId/product/:productId', (req, res) => {
    const cartId = parseInt(req.params.cartId, 10);
    const productId = parseInt(req.params.productId, 10);

    // Leer los carritos desde el archivo
    const carts = readCarts();

    // Validar que los IDs sean válidos
    if (isNaN(cartId) || isNaN(productId)) {
        return res.status(400).send({ error: 'Invalid cartId or productId' });
    }

    // Buscar el carrito por ID
    const cartFind = carts.find(cart => cart.id === cartId);
    if (!cartFind) {
        return res.status(404).send({ error: 'Cart not found' });
    }

    // Buscar si el producto ya existe en el carrito
    const productFind = cartFind.products.find(product => product.product === productId);

    if (productFind) {
        // Incrementar la cantidad si el producto ya existe
        productFind.quantity += 1;
    } else {
        // Agregar un nuevo producto al carrito
        cartFind.products.push({ product: productId, quantity: 1 });
    }

    // Guardar los cambios en el archivo
    writeCarts(carts);

    // Responder con el carrito actualizado
    res.status(200).json({
        message: `Producto con id ${productId} agregado al carrito con id ${cartId}.`,
        cart: cartFind
    });
});
export default router;