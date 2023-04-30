const con = require('../connection/connection')
const uuid = require('uuid')



const insertProducts = async(req, res)=>{
    var statusCode = 400
    try{

        const { name, photo } = req.body

        if(!name || !photo){
            statusCode = 401
            throw new Error('Preencha os campos')
        }


        await con('products_Ecommerce').insert({
            id: uuid.v4(),
            name,
            price: Math.floor(Math.random() * 1000),
            photo
        })


        res.status(200).send('Product inserted successfully')
    }catch(e){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}

module.exports = insertProducts