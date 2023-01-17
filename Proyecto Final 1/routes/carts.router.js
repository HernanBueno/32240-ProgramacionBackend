import {Router} from 'express'
import Cart from '../class/cart.js'
import Product from '../class/product.js'

const router = Router()

let filePathCart = `./files/carts.json`
let filePathProduct = `./files/products.json`
let cart = new Cart(`${filePathCart}`)
let product = new Product(`${filePathProduct}`)

router.get('/:cid', async (req,res) => {
    const getCart = await cart.getCartById(req.params.cid)
    res.send(getCart.products)
})

router.post('/', async (req, res) => {
    const newCart = await cart.createNewCart() 
    res.send(newCart)
})

router.post('/:cid/product/:pid', async (req,res) => {
    let validProduct = await product.getProductById(Number(req.params.pid))
    
    if (validProduct.status == 'successful') {
        const updateCart = await cart.updateCart(Number(req.params.cid), Number(req.params.pid))
        res.send(updateCart.products)
    }
    else {
        res.status(404).send(`Product with id ${req.params.pid} not found`)
    }
    
})

export default router