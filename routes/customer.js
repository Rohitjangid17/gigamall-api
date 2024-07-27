const express = require("express");
const { getNewArrivalProducts, getFeaturedProducts } = require("../controllers/product");
const router = express.Router();

// get new products router
router.get("/newProducts", async (req, res) => {
    const newProducts = await getNewArrivalProducts();
    res.send(newProducts);
});

// get feature products router
router.get("/featureProducts", async (req, res) => {
    const featureProducts = await getFeaturedProducts();
    res.send(featureProducts);
});

module.exports = router;