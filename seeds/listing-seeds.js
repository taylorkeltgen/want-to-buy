const { Listing } = require("../models");

const listingData = [
  {
    user_id: 2,
    category_id: 1,
    id: 1,
    item: "Baseball cap",
    description: "Brand new. Never used",
    price: 9.99,
  },
  {
    user_id: 1,
    category_id: 2,
    id: 2,
    item: "Mittens",
    description: "Warm hand made mittens",
    price: 5.49,
  },
  {
    user_id: 3,
    category_id: 4,
    id: 3,
    item: "Playing cards",
    description: "Matte black back",
    price: 20,
  },
];

const seedListings = () => Listing.bulkCreate(listingData);

module.exports = seedListings;
