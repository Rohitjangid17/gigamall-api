const Product = require("../models/product");

// create product
const createProduct = async (productModel) => {
    const product = new Product({
        ...productModel
    });
    await product.save();
    return product.toObject();
}

// get product list
const getProductList = async () => {
    const productList = await Product.find();
    return productList.map(product => product.toObject());
}

// get product by id
const getProductById = async (productId) => {
    const product = await Product.findById(productId);
    return product?.toObject();
 }

// update product by id
const updateProductById = async (productId, productModel) => {
    await Product.findOneAndUpdate({ _id: productId }, productModel);
}

// delete product by id
const deleteProductById = async (productId) => {
    await Product.findByIdAndDelete(productId);
}

// get new arrival products
const getNewArrivalProducts = async () => {
    let latestProducts = await Product.find({
        isLatest: true
    });

    return latestProducts.map(latestProduct => latestProduct.toObject());
}

// get featured products 
const getFeaturedProducts = async () => {
    let featuredProducts = await Product.find({
        isFeatured: true
    });

    return featuredProducts.map(featuredProduct => featuredProduct.toObject());
}

module.exports = { createProduct, getProductList, getProductById, updateProductById, deleteProductById, getNewArrivalProducts, getFeaturedProducts };