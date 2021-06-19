const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: Object,
        required: true
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