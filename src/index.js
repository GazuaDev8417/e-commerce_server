const express = require('express')
const cors = require('cors')

const getProducts = require('./endpoints/getProducts')
const getProductByid = require('./endpoints/getProductById')
const getProductsInCart = require('./endpoints/getProductsInCart')
const insertProducts = require('./endpoints/insertProducts')
const insertProductsInCart = require('./endpoints/insertProductsInCart')
const delProductInCart = require('./endpoints/delProductInCart')


const app = express()
app.use(express.json())
app.use(cors())


app.get('/products', getProducts)
app.get('/product/:id', getProductByid)
app.get('/cart', getProductsInCart)
app.post('/products', insertProducts)
app.post('/cart/:id', insertProductsInCart)
app.delete('/cart/:id', delProductInCart)



app.listen(process.env.PORT || 3003, ()=>{
    console.log('Server running at http://localhost:3003')
})
