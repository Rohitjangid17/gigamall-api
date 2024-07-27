const Category = require("../models/category");

// add new category
const addCategory = (categoryModel) => {
    const category = new Category({
        ...categoryModel
    });
    category.save();
    return category.toObject();
}

// get category list
const getCategoryList = async () => {
    const categoryList = await Category.find();
    return categoryList.map(category => category.toObject());
}

// get category by id
const getCategoryById = async (categoryId) => {
    const category = await Category.findById(categoryId);
    return category.toObject();
}

// update category by id
const updateCategoryById = async (categoryId, categoryModel) => {
    await Category.findOneAndUpdate({ _id: categoryId }, categoryModel);
}

// delete category by id
const deleteCategoryById = async (categoryId) => {
    await Category.findByIdAndDelete(categoryId);
}

module.exports = { addCategory, updateCategoryById, deleteCategoryById, getCategoryList, getCategoryById };