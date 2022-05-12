const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const productController = require('../controller/productController');
router.post('/add',upload.none(),productController.addProduct);
router.get('/',(req,res)=>{
    res.render('product');
});
module.exports=router;