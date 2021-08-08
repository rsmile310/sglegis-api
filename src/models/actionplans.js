
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('actionplans', {
        actionplan_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement:true },
        unit_id: {type:DataTypes.INTEGER, allowNull: false, comment: 'The unit'},
        item_area_aspect_id: {type:DataTypes.INTEGER, allowNull: false, comment: 'The item and aspect matched on unit'},
        user_id:{type:DataTypes.INTEGER, allowNull: false, comment: 'The user logged who inserted the action plan'},
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'actionplans'
    });
};