const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { nanoid } = require("nanoid");

const productSchema = new Schema({
    shop: {
        type: Schema.Types.ObjectId,
        ref: "Shop",
        required: true
    },
    sku: {
        type: String,
        default: () => nanoid()
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
    images: {
        type: [{ type: String }]
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
        kNumber: [{ type: String }],
        registrationNumber: [{ type: String }],
        feiNumber: [{ type: String }]
    },
    regulationNumber: {
        type: [{ type: String }]
    }
});

// TODO: middleware to update Shop products on creation and deletion

const Product = mongoose.model("Product", productSchema);

module.exports = Product;