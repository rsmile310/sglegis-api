/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('unities_aspects_responsibles', {
        unity_aspect_responsible_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        customer_unity_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        unity_aspect_responsible_name: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        unity_aspect_responsible_email: {
            type: DataTypes.STRING(400),
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'unities_aspects_responsibles'
    });
};
