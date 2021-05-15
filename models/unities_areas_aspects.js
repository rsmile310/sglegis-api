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
            allowNull: true
        },
        area_aspect_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        customer_unity_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'unities_areas_aspects'
    });
};
