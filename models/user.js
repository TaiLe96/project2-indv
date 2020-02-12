const bcrypt = require("bcryptjs");
module.exports = function(sequelize, DataTypes){
   
    var user = sequelize.define("User",{
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },
        name: {
            type: DataTypes.STRING,
        }
    });
    return user;
}