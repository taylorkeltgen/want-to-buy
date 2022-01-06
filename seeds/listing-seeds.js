const { Listing } = require('../models');

const listingData = [
  {
    user_id: 2,
    category_id: 1,
    id: 1,
    item: 'Modern Globe',
    description: 'Replogle black and white globe Designer Series.',
    price: 80.0,
  },
  {
    user_id: 1,
    category_id: 2,
    id: 2,
    item: 'USB Flash Drive Key',
    description: 'LaCie 2 GB USB 2.0',
    price: 7.0,
  },
  {
    user_id: 3,
    category_id: 3,
    id: 3,
    item: '2007 Honda Civic EX Sedan',
    description: 'Silver Paint 120000 miles Clean Texas title',
    price: 7500.0,
  },
  {
    user_id: 3,
    category_id: 4,
    id: 4,
    item: 'Soccer Ball',
    description: 'Brand new',
    price: 20.0,
  },
  {
    user_id: 3,
    category_id: 5,
    id: 5,
    item: 'Tesla Belt Buckle',
    description:
      'Official Giga Texas Belt Buckle manufactured from die cast zinc, engraved with a prominent T logo atop the Texas Lone Star, and brushed with an antique silver finish',
    price: 200.0,
  },
  {
    user_id: 3,
    category_id: 6,
    id: 6,
    item: 'Yorkie Poo',
    description:
      'Very playful potty trained designer dog hypoallergenic with black white and hints of brown color shots up-to-date records included looking for a good home',
    price: 900.0,
  },
  {
    user_id: 1,
    category_id: 5,
    id: 7,
    item: 'Polo Shirt',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 20.0,
  },
  {
    user_id: 2,
    category_id: 4,
    id: 8,
    item: 'Golf Clubs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 100.0,
  },
  {
    user_id: 1,
    category_id: 3,
    id: 9,
    item: 'Steering Wheel Cover',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 15.0,
  },
  {
    user_id: 3,
    category_id: 2,
    id: 10,
    item: 'Dell Laptop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 200.0,
  },
  {
    user_id: 1,
    category_id: 1,
    id: 11,
    item: 'Chef Knife',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 50.0,
  },
  {
    user_id: 2,
    category_id: 6,
    id: 12,
    item: 'Trash Can',
    description: 'I really need a trash can!  I will pay anything!',
    price: 999.99,
  },
  {
    user_id: 3,
    category_id: 2,
    id: 13,
    item: 'RGB Lights',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 200.0,
  },
  {
    user_id: 1,
    category_id: 1,
    id: 14,
    item: 'Ceiling Fan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 75.0,
  },
  {
    user_id: 2,
    category_id: 6,
    id: 15,
    item: 'Trash Can',
    description: 'I STILL need a trash can!  I will pay anything!',
    price: 999.99,
  },
];

const seedListings = () => Listing.bulkCreate(listingData);

module.exports = seedListings;
