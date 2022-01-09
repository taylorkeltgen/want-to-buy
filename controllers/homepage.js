const router = require('express').Router();
const { Category, Listing, User } = require('../models');
const sequelize = require('../config/connection');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// HOMEPAGE page route
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
        attributes: ['id', 'label', 'image_id'],
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

// LOGIN page route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// SIGNUP page route
router.get('/signup', (req, res) => {
  res.render('signup');
});

// SINGLE-LISTING page route
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
        attributes: ['id', 'label', 'image_id'],
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

// FILTER-CATEGORY page route
router.get('/category/:id', (req, res) => {
  Listing.findAll({
    where: {
      category_id: req.params.id,
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
        attributes: ['id', 'label', 'image_id'],
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
      res.render('filter-category', {
        listings,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Search for listings
router.get('/search', (req, res) => {
  Listing.findAll({
    where: {
      item: { [Op.like]: '%' + req.query.term + '%' },
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
        attributes: ['id', 'label', 'image_id'],
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
      res.render('homepage', { listings, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
