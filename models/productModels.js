const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    quantity: {
        type: Number,
        required: true
    },
    buyingPrice: {
        type: Number,
        required: true
    },
    mrp: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);