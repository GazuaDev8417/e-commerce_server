const con = require('../connection/connection')



const delProductInCart = async(req, res)=>{
    var statusCode = 400
    try{

        const [product] = await con('ecommerce_cart').where({
            id: req.params.id
        })

        if(!product){
            statusCode = 404
            throw new Error('Produto não encontrado')
        }


        if(product.quantity > 1){
            await con('ecommerce_cart').update({
                quantity: product.quantity - 1
            }).where({
                id: product.id
            })
        }else{
            await con('ecommerce_cart').del().where({
                id: product.id
            })
        }

        
        res.status(200).send(`${product.name} excluído`)
    }catch(e){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}

module.exports = delProductInCart