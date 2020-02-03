var path = require("path");

// Routes
module.exports = function (req, res){
    // Route to login page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/login.html"))
    });

    // After login - Route to post page
    app.get("/post", function (req, res){
        res.sendFile(path.join(_dirname, "../public/post.html"))
    })

    // Route to create post
    app.get("/makePost", function (req, res){
        res.sendFile(path.join(__dirname, "../public/createPost.html"))
    })
}