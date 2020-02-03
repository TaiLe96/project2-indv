module.exports = function(sequelize, DataTypes){
    var Event = sequelize.define("Event", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Event.associate = models => {
        // Each Event belongs to A User
        models.Event.belongsTo(models.User, { as: "host" })
        // Each Event can have many UserEvent
        models.Event.hasMany(models.UserEvent, {
        // This deletes all associate UserEvents when an Event is deleted
            onDelete: "cascade"
        })
    }
    return Event;
}