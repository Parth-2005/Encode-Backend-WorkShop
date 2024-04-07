const {default: mongoose} = require("mongoose");
const Product = require("../models/productModels");

const getAllProducts = async (req, res) => {
    const products = await Product.find({}).sort({createdAt: -1});
    res.status(200).json(products);
}

const getProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such product' });
    }
    const product = await Product.findById(id);
    if (!product) {
        return res.status(404).json({ error: 'No such product' });
    }
    res.status(200).json(product);
}

const createProduct = async (req, res) => {
    const { name, description, quantity, buyingPrice, mrp, category } = req.body;
    try{
        const product = await Product.create({ name, description, quantity, buyingPrice, mrp, category });
        res.status(200).json(product);
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
}
const updateProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such product' });
    }
    const product = await Product.findByIdAndUpdate(
        { _id: id },
        {
            ...req.body
        }
    );
    if (!product) {
        return res.status(404).json({ error: 'No such product' });
    }
    res.status(200).json(product);
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such product' });
    }
    const product = await Product.findByIdAndDelete({ _id: id });
    if (!product) {
        return res.status(404).json({ error: 'No such product' });
    }
    res.status(200).json(product);
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};