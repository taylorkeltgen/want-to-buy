const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Listing, User, Category } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  Listing.findAll({})
    .then((dbListingData) => res.json(dbListingData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Listing.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbListingData) => {
      if (!dbListingData) {
        res.status(404).json({ message: 'No Listing found with this id' });
        return;
      }
      res.json(dbListingData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  console.log('============');
  Listing.create({
    item: req.body.item,
    description: req.body.description,
    price: req.body.price,
    user_id: req.session.user_id,
    category_id: req.body.category_id,
  })
    .then((dbListingData) => res.json(dbListingData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Listing.update(
    {
      item: req.body.item,
      description: req.body.description,
      price: req.body.price,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbListingData) => {
      if (!dbListingData) {
        res.status(404).json({ message: 'No Listing found with this id' });
        return;
      }
      res.json(dbListingData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Listing.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbListingData) => {
      if (!dbListingData) {
        res.status(404).json({ message: 'No Listing found with this id' });
        return;
      }
      res.json(dbListingData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
