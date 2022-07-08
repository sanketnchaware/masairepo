const express=require('express');

const Product=require('../models/product.model');

const router=express.Router();

router.post("",async (req, res) => {
    const products=await Product.find().lean().exec();
 res.render("all_products.ejs",{
        products:products
    });
})

module.exports=router;