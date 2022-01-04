const router = require('express').Router();
const { Category, Listing, User } = require('../models');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  Listing.findAll({
    attributes: ['id', 'item', 'description', 'price', 'created_at'],
    include: [
      {
        model: Category,
        attributes: ['id', 'label'],
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbListingData) => {
      const listings = dbListingData.map((listing) =>
        listing.get({ plain: true })
      );
      // pass a single listing object into the homepage template
      res.render('homepage', { listings, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// router.get('/listing/:id', (req, res) => {
//   Listing.findByPk(req.params.id, {
//     include: [User],
//   });
//   console.log(req);
// });

module.exports = router;
