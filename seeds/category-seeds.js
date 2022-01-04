const { Category } = require("../models");

const categoryData = [
  {
    label: "Home Goods",
  },
  {
    label: "Electronics",
  },
  {
    label: "Automotive",
  },
  {
    label: "Other",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
