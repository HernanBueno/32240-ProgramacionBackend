//import
import express from 'express'
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import messagesRouter from './routes/messages.router.js'
import viewsRouter from './routes/views.router.js'
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'


//express
const app = express()
const PORT = 8080
const dataBase = `ecommerce`
const dbClusterName = `ecommercecluster`


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"));

app.engine('handlebars', handlebars.engine());
app.set("views", __dirname+"/views");
app.set("view engine", 'handlebars');
app.use('/', viewsRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

mongoose.connect(`mongodb+srv://florusso:florusso@${dbClusterName}.td2mcba.mongodb.net/${dataBase}?retryWrites=true&w=majority`, error => {
    if (error) {
        console.log(`Cannot connect to database ${dataBase}: ${error}`)
        process.exit()
    }
})




app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)
app.use('/api/messages', messagesRouter)