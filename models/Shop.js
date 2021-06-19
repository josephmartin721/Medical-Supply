const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
    },
    address: {
        country: { type: String },
        address: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String }
    },
    phone: {
        type: String
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    contacts: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;