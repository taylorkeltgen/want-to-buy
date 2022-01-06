const router = require('express').Router();
const sequelize = require('../config/connection');
const { Listing, User, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Listing.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id,
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
      // serialize data before passing to template
      const listings = dbListingData.map((listing) =>
        listing.get({ plain: true })
      );
      res.render('dashboard', { listings, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
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
      // serialize data before passing to template
      const listing = dbListingData.get({ plain: true });

      res.render('edit-listing', { listing, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
