const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const { addCategory, updateCategoryById, deleteCategoryById, getCategoryList, getCategoryById } = require("../controllers/category");

// Route to category create
router.post("/", async (req, res) => {
    const model = req.body;
    const result = await addCategory(model);
    res.send(result);
});

// Route to get category list
router.get("/", async (req, res) => {
    let result = await getCategoryList();
    res.send(result);
});

// Route to get category by id
router.get("/:id", async (req, res) => {
    const id = req.params["id"];
    const category = await getCategoryById(id);
    res.send(category);
});

// Route to update category by id
router.put("/:id", async (req, res) => {
    const model = req.body;
    const id = req.params["id"];
    await updateCategoryById(id, model);
    res.send({ message: "Category Update" });
});

// Route to delete category by id
router.delete("/:id", async (req, res) => {
    const id = req.params["id"];
    await deleteCategoryById(id);
    res.send({ message: "Category Delete" });
});

module.exports = router;