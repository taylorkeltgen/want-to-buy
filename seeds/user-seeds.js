const { User } = require("../models");

const userData = [
  {
    username: "mr_niceguy",
    email: "user1@test.com",
    password: "test1",
  },
  {
    username: "johnDoe",
    email: "user2@test.com",
    password: "test2",
  },
  {
    username: "peterPan",
    email: "user3@test.com",
    password: "test3",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
