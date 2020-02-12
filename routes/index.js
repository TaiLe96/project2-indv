var db = require("../models");

module.exports = function(app) {
    //route used for checking user info during login
    app.put("/api/user", (req, res) => {
        db.User.findOne({
            where: req.body
        })
        .then(user => {
            // send user id back to client
            res.json(user.id);
        }).catch(err => {
            // send a false statement for client to handle error
            res.send(false);
        })
    })

    // route used to register a new user
    app.post("api/user", (req, res) => {
        // create an item in user wit values taken from req.body
        db.User.create(req.body)
        .then(user => {
            // send back the user id to client
            res.json(user.id);
        }).catch(err => {
            res.send(false);
        })
    })

    // route to get info from a specific user
    app.get("/api/user/:id", (req, res) => {
        db.User.findOne({
            where: {
                id: req.params.id
            },
            attribure: ["id", "email", "name"]
        }).then(user => {
            res.json(user);
            console.log(err);
            res.send(false)
        })
    })

    // route to update information for a specific user
    app.put("api/user/:id", (req, res) => {
        db.User.update(req.body,{
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.send(true)
        }).catch(err => {
            console.log(err);
            res.send(false);
        })
    })

    // route to get all events made by user
    app.get("/api/user/:id/events", (req, res) => {
        db.User.findAll({
            where:{
                hostId: req.params.id
            }
        }).then(events => {
            res.json(events)
        }).catch(err => {
            console.log(err);
            res.send(false);
        })
    })

    
}