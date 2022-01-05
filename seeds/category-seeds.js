const { Category } = require('../models');

const categoryData = [
  {
    label: 'Home Goods',
    image_id: 'https://want-to-buy.s3.us-east-2.amazonaws.com/globe-icon.png',
  },
  {
    label: 'Electronics',
    image_id: 'https://want-to-buy.s3.us-east-2.amazonaws.com/phone-icon.png',
  },
  {
    label: 'Automotive',
    image_id: 'https://want-to-buy.s3.us-east-2.amazonaws.com/car-icon.png',
  },
  {
    label: 'Sports',
    image_id:
      'https://want-to-buy.s3.us-east-2.amazonaws.com/soccer-ball-icon.png',
  },
  {
    label: 'Apparel',
    image_id: 'https://want-to-buy.s3.us-east-2.amazonaws.com/shirt-icon.png',
  },
  {
    label: 'Other',
    image_id: 'https://want-to-buy.s3.us-east-2.amazonaws.com/dog-icon.png',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
