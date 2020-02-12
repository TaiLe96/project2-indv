const db = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
    userLogin: function (email, password){
        return new Promise((resolve, reject) => {
            db.User.findOne({
                email: email
            }).then(user => {
                user.verifyPassword(password, (err, match) => {
                    if (match && !err) {
                        let token = jwt.sign({ id: user._id, email: user.email}, process.env.SERVER_SECRET, {expiresIn: 13000});
                        resolve({ success: true, message: "Token Issued!", token: token, user: user });
          } else {
            reject({ success: false, message: "Authentication failed. Wrong password." });
          }
        });
      }).catch(err => reject({ success: false, message: "User not found", error: err }));
    })
  },
  logArtistIn: function (email, password) {
    return new Promise((resolve, reject) => {
      db.Artist.findOne({
        email: email
      }).then(artist => {
        artist.verifyPassword(password, (err, isMatch) => {
          if (isMatch && !err) {
            let token = jwt.sign({ id: artist._id, email: artist.email }, process.env.SERVER_SECRET, { expiresIn: 129600 }); // Sigining the token
            resolve({ success: true, message: "Token Issued!", token: token, user: artist });
          } else {
            reject({ success: false, message: "Authentication failed. Wrong password." });
          }
        });
      }).catch(err => reject({ success: false, message: "Artist not found", error: err }));
    })
  }
}