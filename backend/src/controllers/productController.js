const product2 =require("../models/product2Schema.js");
const cart=require("../models/Cart.js");
//Adding logging
const logger=require("../logs/logger.js") ;
//Adding caching
// const redis = require("../config/redis");

exports.createProduct =
async(req,res)=>{
    const variants = JSON.parse(req.body.variants);
    const specifications = JSON.parse(req.body.specifications);
    const productData = {
          ...req.body,
          specifications: JSON.parse(req.body.specifications || "[]"),
          variants: JSON.parse(req.body.variants || "[]")
    };
    // console.log("Hii",productData);
    
    // console.log("Product Data:", productData);
    const product = await product2.create(productData);
    res.status(201).json(product);
};

exports.getProduct = async (req, res,next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const products = await product2.find({}).skip(skip).limit(limit);
    // const products = await product.find({});
    const totalProducts = await product2.countDocuments();
    
     logger.info("Products fetched successfully", {
      count: products.length,
    });
    return res.status(200).json({
      success: true,
      count: products.length,
      totalProducts,
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
      products,
    });
  } catch (error) {
    next(error);
  }
};
exports.searchProducts = async (req, res) => {
    try {
      console.log("Hey here");
        const { name } = req.query;
        console.log("Searching for products with name:", name);
        const products = await product2.find({
            name: { $regex: name, $options: "i" }
        });

        res.status(200).json({
            success: true,
            data: products
        });

    } catch (error) {
       next(error);
    }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct =
        await product2.find({
           name: req.query.name
});

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct
    });

  } catch (error) {
    next(error);
  }
};

exports.getProductById =async (req, res) => {
 try {
      console.log("Hey here");
        const { name } = req.query;
        console.log("Searching for products with name:", name);
        const products = await product2.find({
            name: { $regex: name, $options: "i" }
        });

        res.status(200).json({
            success: true,
            data: products
        });

    } catch (error) {
       next(error);
    }
};

exports.deleteProduct =
async(req,res)=>{

    await product2.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message:"Product deleted"
    });
};


exports.addProductToCart = async (req, res,next) => {
    try {
      // console.log("addProductTo cart reached",req.body)
          const CartData= await cart.create(req.body);
          // console.log("CartData",CartData);
          res.status(201).json(CartData);
          // console.log("Product added to cart successfully");
      
  } catch (error) {
    next(error);
  }
};