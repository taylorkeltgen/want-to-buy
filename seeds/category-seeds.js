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
    label: "Sports"
  },
  {
    label: "Apparel"
  },
  {
    label: "Other",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
