const Brand = require("../models/brand");

// get brand list
const getBrands = async () => {
    const brandList = await Brand.find();
    return brandList.map(brand => brand.toObject());
}

// get brand by id
const getBrandById = async (brandId) => {
    const brand = await Brand.findById(brandId);
    return brand.toObject();
}

// add brand
const createBrand = async (brandModel) => {
    const brand = new Brand({
        ...brandModel
    });

    await brand.save();
    return brand.toObject();
}

// update brand by id
const updateBrandById = async (brandId, brandModel) => {
    await Brand.findByIdAndUpdate(brandId, brandModel);
}

// delete brand by id
const deleteBrandById = async (brandId) => {
    await Brand.findByIdAndDelete(brandId);
}

module.exports = { getBrands, getBrandById, createBrand, updateBrandById, deleteBrandById };