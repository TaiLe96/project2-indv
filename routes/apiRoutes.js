const db = require("../models");

module.exports = function(app) {

    // USER ROUTES
    // =========================================================
    
        // Get all users
        app.get("/api/users", function(req, res) {
            console.log(req.body);
            db.User.findAll({
                include: [db.Playlist, db.Subscription]
            })
            .then(function(dbUser) {
                res.json(dbUser);
            });
        }); 
    
        // Get one user by id and their playlists+subscriptions and return JSON
        app.get("/api/users/:id", function(req, res) {
            console.log(req.body);
            db.User.findOne({
                where: { id: req.params.id },
                include:[db.Playlist, db.Subscription] 
            }).then(function(dbUser) {
                res.json(dbUser);
            });
        }); 
    
        // Add a user
        app.post("/api/users", function(req, res) {
            db.Users.create({ 
                username: req.body.username,
                password: req.body.password
            }).then(function(dbUser) {
                res.status(200).end();
            });
        });
    
        // Get user data
        app.get('/api/user_data', function(req, res) {
            if (req.user) {
                // The user is not logged in
                res.json(req.user);
            } else {
                res.json({});
            }
        });
    }