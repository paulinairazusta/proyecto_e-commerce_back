const Product = require("../models/productModel");

const productController = {
  getAllProducts: async (req, res) => {
    const products = await Product.find().populate("category");

    res.send(products);
  },
  getProductById: async (req, res) => {
    const product = await Product.findById(req.params.id).populate("category");

    res.send(product);
  },
  getCakes: async (req, res) => {
    const products = await Product.find({
      category: "62b4bfb2188f710b435fbea5",
    }).populate("category");
    res.send(products);
  },
  getTruffles: async (req, res) => {
    const products = await Product.find({
      category: "62b4bfb2188f710b435fbea6",
    }).populate("category");
    res.send(products);
  },
  getCups: async (req, res) => {
    const products = await Product.find({
      category: "62b4bfb2188f710b435fbea7",
    }).populate("category");
    res.send(products);
  },
  getTarts: async (req, res) => {
    const products = await Product.find({
      category: "62b4bfb2188f710b435fbea8",
    }).populate("category");
    res.send(products);
  },
  createProduct: async (req, res) => {
    await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      destacado: req.body.destacado,
      slug: "",
      category: req.body.category, //Hay que pasarle el id de la categoria!!
    });
    res.send("producto agregado!");
  },
};

module.exports = productController;
