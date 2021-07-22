/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('responsibles_aspects', {
        responsible_aspect_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        area_aspect_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        unity_aspect_responsible_id: {
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
        tableName: 'responsibles_aspects'
    });
};
