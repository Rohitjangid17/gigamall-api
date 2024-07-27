const express = require("express");
const { createBrand, getBrands, getBrandById, updateBrandById, deleteBrandById } = require("../controllers/brand");
const router = express.Router();

// Route to brand create
router.post("/", async (req, res) => {
    const model = req.body;
    const brand = await createBrand(model);
    res.send(brand);
});

// Route to get brand list
router.get("/", async (req, res) => {
    let brands = await getBrands();
    res.send(brands);
});

// Route to get brand by id
router.get("/:id", async (req, res) => {
    const id = req.params["id"];
    const product = await getBrandById(id);
    res.send(product);
});

// Route to update brand by id
router.put("/:id", async (req, res) => {
    const model = req.body;
    const id = req.params["id"];
    await updateBrandById(id, model);
    res.send({ message: "Brand Update" });
});

// Route to delete brand by id
router.delete("/:id", async (req, res) => {
    const id = req.params["id"];
    await deleteBrandById(id);
    res.send({ message: "Brand Delete" });
});

module.exports = router;