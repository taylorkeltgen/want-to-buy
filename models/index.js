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

Listing.belongsTo(Category, {
  foreignKey: 'category_id',
});
Category.hasMany(Listing, {
  foreignKey: 'category_id',
});

module.exports = { User, Listing, Category };
