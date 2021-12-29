const User = require('./User');
const Listing = require('./Listing');
const Category = require('./Category');

// create One-to-Many associations
User.hasMany(Listing, {
  foreignKey: 'user_id',
});
Listing.belongsTo(User, {
  foreignKey: 'user_id',
});

Listing.belongsToMany(Category, {
  through: 'listed_category',
  as: 'listings_category',
  foreignKey: 'category_id',
});
Category.belongsToMany(Listing, {
  through: 'listed_category',
  as: 'category_listed',
  foreignKey: 'listing_id',
});

module.exports = { User, Listing, Category };
