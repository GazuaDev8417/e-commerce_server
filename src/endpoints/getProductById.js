const con = require('../connection/connection')



const getProductById = async(req, res)=>{
    var statusCode = 400
    try{
        
        const [product] = await con('ecommerce_products').where({
            id: req.params.id
        })

        if(!product){
            statusCode = 404
            throw new Error('Producto não encontrado')
        }

        
        res.status(200).send(product)
    }catch(e){
       res.status(statusCode).send(e.message || e.sqlMessage) 
    }
}

module.exports = getProductById