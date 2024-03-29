import {Router} from 'express'
import Product from '../dao/mongoDbManager/product.mongoDb.js'

const router = Router()
// let filePath = `./files/products.json`
let product = new Product()

router.get('/', async (req,res) => {

    const urlProds = `http://localhost:8080/api/products`

    res.send(await product.getProducts(req.query.limit, req.query.page, req.query.sort, req.query.query, urlProds))
})

router.get('/:pid', async (req,res) => {

    const productId = await product.getProductById(req.params.pid)
    if (productId.status == 'successful') {
        res.send(productId.value)
    }else {
        res.status(400).send(productId)
    } 
})

router.post('/', async (req,res) => {
    const productAdded = await product.addProduct(req.body)
    if (productAdded.status == 'successful') {
        res.send(productAdded.value)
    }
    else {
        res.status(400).send(productAdded)
    }
    
})

router.put('/:pid', async (req,res) => {
    const productChanged = await product.updateProduct(req.params.pid, req.body)
    if (productChanged.status == 'successful') {
        res.send(productChanged.value)
    }else {
        res.status(400).send(productChanged)
    }
    
})

router.delete('/:pid', async (req,res) => {

    const deleteProduct = await product.deleteProduct(req.params.pid)
    
    if (deleteProduct.status == 'successful') {
        res.send(deleteProduct)
    }else {
        res.status(400).send(deleteProduct)
    }
})

export default router