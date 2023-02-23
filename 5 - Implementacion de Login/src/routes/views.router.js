import express from 'express'
import Product from '../dao/mongoDbManager/product.mongoDb.js'
import Cart from '../dao/mongoDbManager/cart.mongoDb.js'


const router = express.Router()
let product = new Product()
let cart = new Cart()

let productsList = []

router.get('/products', async (req,res) => {

    const isUserLogged = req.session.user ? true : false
    const userLogged = req.session.user
    
    let productsData = (await product.getProducts(req.query.limit, req.query.page, req.query.sort, req.query.query)).payload

    res.render('index', {layout: 'main', productsData, userLogged, isUserLogged})
})

router.get('/carts/:cid', async (req,res) => {
    let cartData = (await cart.getCartById(req.params.cid)).value
    const cartId = cartData._id
    const cartProducts = cartData.products
    res.render('cart', {layout: 'main', cartId, cartData, cartProducts})
})

router.get('/', async (req,res) => {
    res.redirect('/login')
})

router.get('/login', async (req,res) => {
    const isUserLogged = req.session.user ? true : false
    const userLogged = req.session.user
    
    res.render('login', {layout: 'main', isUserLogged})
})

router.get("/logout", async (req, res) => {
    
    req.session.destroy();
    res.send("Session logged out");
});

router.get('/register', async (req,res) => {

    res.render('register', {layout: 'main'})
})



export default router
