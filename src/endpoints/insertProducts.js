const con = require('../connection/connection')
const uuid = require('uuid')



const insertProductsInCart = async(req, res)=>{
    var statusCode = 400
    try{

        const { name, price, photo } = req.body

        if(!name || !price || !photo){
            statusCode = 401
            throw new Error('Preencha os campos')
        }


        await con('ecommerce_products').insert({
            id: uuid.v4(),
            name,
            price,
            photo
        })


        res.status(200).send('Produto adicionado')
    }catch(e){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}

module.exports = insertProductsInCart