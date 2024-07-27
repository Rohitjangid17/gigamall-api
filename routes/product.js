const express = require("express");
const router = express.Router();
const { createProduct, getProductList, getProductById, updateProductById, deleteProductById } = require("../controllers/product");

// Route to product create
router.post("/", async (req, res) => {
    const model = req.body;
    const product = await createProduct(model);
    res.send(product);
});

// Route to get product list
router.get("/", async (req, res) => {
    let products = await getProductList();
    res.send(products);
});

// Route to get product by id
router.get("/:id", async (req, res) => {
    const id = req.params["id"];
    const product = await getProductById(id);
    res.send(product);
});

// Route to update product by id
router.put("/:id", async (req, res) => {
    const model = req.body;
    const id = req.params["id"];
    await updateProductById(id, model);
    res.send({ message: "Product Update" });
});

// Route to delete brand by id
router.delete("/:id", async (req, res) => {
    const id = req.params["id"];
    await deleteProductById(id);
    res.send({ message: "Product Delete" });
});

module.exports = router;