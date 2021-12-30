const router = require('express').Router();
const req = require('express/lib/request');
const { Category, Listing } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all categories
router.get('/', (req, res) => {
  // Access our Category model and run .findAll() method)
  Category.findAll({
      attributes: [
          'id',
          'label'
      ]
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/category/1
router.get('/:id', (req, res) => {
  Category.findOne({
    attributes: [
        'id',
        'label'
    ],
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Listing,
        attributes: [
          'id',
          'item',
          'description',
          'price',
          'category_id',
          'created_at',
        ],
      },
    ],
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/category
router.post('/', (req, res) => {
  // expects {label: 'Electronics'}
  Category.create({
    label: req.body.label,
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// create a category
router.put('/:id', (req,res) => {
  Category.update(
    {label: req.body.label}, 
    {where: {id: req.params.id}})
  })
  .then((dbCategoryData) => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
  

// DELETE /api/category/1
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;