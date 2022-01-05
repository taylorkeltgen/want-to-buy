const { Listing } = require('../models');

const listingData = [
  {
    user_id: 2,
    category_id: 1,
    id: 1,
    item: 'Modern Globe',
    description: 'Replogle black and white globe Designer Series.',
    price: 80.00,
  },
  {
    user_id: 1,
    category_id: 2,
    id: 2,
    item: 'Key USB Flash Drive',
    description: '2 GB USB 2.0',
    price: 7.00,
  },
  {
    user_id: 3,
    category_id: 3,
    id: 3,
    item: '2007 Honda Civic EX Sedan',
    description: 'Silver Paint 120000 miles Clean Texas title',
    price: 7500.00,
  },
  {
    user_id: 3,
    category_id: 4,
    id: 4,
    item: 'Soccer Ball',
    description: 'Brand new',
    price: 20.00,
  },
  {
    user_id: 3,
    category_id: 5,
    id: 5,
    item: 'Tesla Belt Buckle',
    description: 'Official Giga Texas Belt Buckle manufactured from die cast zinc, engraved with a prominent T logo atop the Texas Lone Star, and brushed with an antique silver finish',
    price: 200.00,
  },
  {
    user_id: 3,
    category_id: 6,
    id: 6,
    item: 'Yorkie Poo',
    description: 'Designer dog hypoallergenic with black white and hints of brown color',
    price: 900.00,
  },
];

const seedListings = () => Listing.bulkCreate(listingData);

module.exports = seedListings;
