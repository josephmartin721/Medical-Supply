const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    sku: {
        type: String,
        required: true
    },
    code: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    medicalSpecialtyDescription: {
        type: String
    },
    image: {
        type: String
    },
    usage: {
        type: String
    },
    benefits: {
        type: String
    },
    rating: {
        type: Number
    },
    deviceClass: {
        type: String
    },
    openFda: {
        type: Mixed
    },
    regulationNumber: {
        type: Array
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;