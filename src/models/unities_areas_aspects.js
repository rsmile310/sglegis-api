/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('unities_areas_aspects', {
        unity_area_aspect_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        area_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        area_aspect_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        customer_unity_id: {
            type: DataTypes.INTEGER,
            allowNull: false
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
        tableName: 'unities_areas_aspects'
    });
};
