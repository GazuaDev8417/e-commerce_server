const con = require('../connection/connection')



const getProductsInCart = async(req, res)=>{
    var statusCode = 400
    try{

        const products = await con('ecommerce_cart')


        res.status(200).send(products)
    }catch(e){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}

module.exports = getProductsInCart