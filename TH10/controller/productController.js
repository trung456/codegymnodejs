const productModel = require('../model/product');
exports.addProduct = async (req,res)=>{
    console.log(req.body);
    const productData = {
        name: req.body.name,
        number: req.body.number,
        price: req.body.price
    }
    const product=await productModel.create(productData);
    res.json({
        product:product
    })
}
