var path = require("path");

module.exports = function(app){
    app.get("/", (req,res) => {
        if(req.user){
            res.redirect("/login");
        }
        res.sendfile(path.join(_dirname, "../"))
    })
}