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
    attributes: ['id', 'title', 'post_text', 'created_at'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPostData) => {
      // serialize data before passing to template
      const listings = dbPostData.map((listing) =>
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
  listing
    .findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'title', 'post_text', 'created_at'],
      include: [
        // include the Comment model here:
        {
          model: Comment,
          attributes: [
            'id',
            'comment_text',
            'post_id',
            'user_id',
            'created_at',
          ],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })
    .then((dbPostData) => {
      // serialize data before passing to template
      const listing = dbPostData.get({ plain: true });

      res.render('edit-listing', { listing, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
