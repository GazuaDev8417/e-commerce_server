const con = require('../connection/connection')
const uuid = require('uuid')


const insertProductsInCart = async(req, res)=>{
    var statusCode = 400
    try{

        const { name, price } = req.body

        if(!name || !price){
            statusCode = 401
            throw new Error('Preencha os campos')
        }


        const [product] = await con('ecommerce_products').where({
            id: req.params.id
        })

        if(!product){
            statusCode = 404
            throw new Error('Produto não  encontrado')
        }
        

        const productsInCart = await con('ecommerce_cart').where({
            product_id: product.id
        })

        if(productsInCart.length > 0){
            for(productInCart of productsInCart){
                await con('ecommerce_cart').update({
                    quantity: productInCart.quantity + 1
                }).where({
                    id: productInCart.id
                })
            }
        }else{
            await con('ecommerce_cart').insert({
                id: uuid.v4(),
                name,
                price,
                product_id: product.id,
                quantity: 1
            })
        }


        res.status(200).send('Produto adicionado ao carro')
    }catch(e){
        res.status(statusCode).send(e.message || e.sqlMessage)
    }
}

module.exports = insertProductsInCart