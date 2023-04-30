const con = require('../connection/connection')



const getProducts = async(req, res)=>{
    var statusCode = 400
    try{

        const products = await con('products_Ecommerce')

        
        res.status(200).send(products)
    }catch(e){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}

module.exports = getProducts