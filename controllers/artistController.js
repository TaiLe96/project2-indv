const db = require("../models");

// Defining methods for the productsController
module.exports = {
  signUp: function(req, res) {
    console.log(req.body);
    db.Artist.create(req.body)
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
};
