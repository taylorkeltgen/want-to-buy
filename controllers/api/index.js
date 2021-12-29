const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const listingRoutes = require('./listing-routes');
// const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/listings', listingRoutes);
// router.use('/categories', categoryRoutes);

module.exports = router;
