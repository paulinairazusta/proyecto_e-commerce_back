const mongoose = require("mongoose");

module.exports = async () => {
  mongoose.connect(process.env.CONNECTION_DB);

  await require("../seeders/userSeeder")();
  await require("../seeders/categorySeeder")();
  await require("../seeders/productSeeder")();
  await require("../seeders/adminSeeder")();
};
