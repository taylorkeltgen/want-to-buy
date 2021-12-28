// initializing router
const router = require('express').router();

// import routes
const apiRoutes = require('./api');
const homepageRoutes = require('./homepage.js');
const dashboardRoutes = require('./dashboard.js');

// 
router.use('/', homepageRoutes);
router.use('dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

// exporting the module

module.exports = router;
