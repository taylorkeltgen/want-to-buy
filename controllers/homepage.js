// initializing router
const router = require("express").Router();
// we need models so that data is rendered
const { Category, Listing, User } = require("../models");
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
  // we are using try so that if it breaks the entire app can still run
  try {
    const data = Listing.findAll({
      include: [User],
    });
    console.log(data);
    const listings = data.map((listings) => {
      // converting every item in the data array into a workable object
      plain: true;
    });
    console.log(listings);
    // handlebar will render the data
    res.render("listings", { listings });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", (req, res) => {
  Listing.findByPk(req.params.id, {
    include: [User],
  });
  console.log(req);
});

module.exports = router;
