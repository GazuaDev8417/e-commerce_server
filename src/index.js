const express = require('express')
const cors = require('cors')

const getProducts = require('./endpoints/getProducts')
const insertProducts = require('./endpoints/insertProducts')


const app = express()
app.use(express.json())
app.use(cors())


app.get('/products', getProducts)
app.post('/products', insertProducts)



app.listen(process.env.PORT || 3003, ()=>{
    console.log('Server running at http://localhost:3003')
})
