const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    disc: {
        type: String,
        required: true
    },
   images: {
    type: Array,
    required: true
   }
}, { timestamps: true });

const Product = mongoose.model('product', productSchema);
module.exports = Product