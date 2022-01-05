const router = require('express').Router();
const { Category, Listing, User } = require('../models');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  Listing.findAll({
    attributes: [
      'id',
      'item',
      'description',
      'price',
      'category_id',
      'created_at',
    ],
    include: [
      {
        model: Category,
        attributes: ['id', 'label'],
      },
      {
        model: User,
        attributes: ['username', 'email'],
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

router.get('/listings/:id', (req, res) => {
  Listing.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      'item',
      'description',
      'price',
      'category_id',
      'created_at',
    ],
    include: [
      {
        model: Category,
        attributes: ['id', 'label'],
      },
      {
        model: User,
        attributes: ['username', 'email'],
      },
    ],
  })
    .then((dbListingData) => {
      if (!dbListingData) {
        res.status(404).json({ message: 'No listing found with this id' });
        return;
      }
      // serialize the data
      const listing = dbListingData.get({ plain: true });
      // pass data to template
      res.render('single-listing', { listing, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
