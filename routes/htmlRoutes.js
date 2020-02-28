var path = require('path')
module.exports = function(app) {
 
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + "../../public/index.html"));
})
app.get('/registerArtist', (req,res) => {
    res.sendFile(path.join(__dirname + "../../public/adminSignup.html"));
})
app.get('/userSignUp', (req,res) => {
    res.sendFile(path.join(__dirname + "../../public/userSignup.html"));
})
app.get('/admin', (req,res) => {
    res.sendFile(path.join(__dirname + "../../public/admin.html"));
})
app.get('/user', (req,res) => {
    res.sendFile(path.join(__dirname + "../../public/user.html"));
})

   
}
