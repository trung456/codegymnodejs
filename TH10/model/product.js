const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    name: String,
    price: Number,
    number: Number
});

const Product = mongoose.model('Product',ProductSchema);
module.exports = Product;

