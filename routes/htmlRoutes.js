var path = require("path");
var isLoggedIn = require("")

// Routes
module.exports = function (app){
    // Route to login page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/views/login.html"))
    });

    // Route to signup page
    app.get("/signup", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/views/signup.html"))
    })

    // After login - Route to post page
    app.get("/post", function (req, res){
        res.sendFile(path.join(__dirname, "../public/views/post.html"))
    })

    // Route to create post
    app.get("/makePost", function (req, res){
        res.sendFile(path.join(__dirname, "../public/views/createPost.html"))
    })

    // Route to author.html
    app.get("/authors", function (req, res){
        res.sendFile(path.join(__dirname, "../public/views/author.html"))
    })
}