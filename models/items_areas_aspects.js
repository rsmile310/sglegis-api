module.exports = function (sequelize, DataTypes) {
    return sequelize.define('items_areas_aspects', {
        item_area_aspect_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        area_id: { type: DataTypes.INTEGER, allowNull: true },
        area_aspect_id: { type: DataTypes.INTEGER, allowNull: true },
        document_item_id: { type: DataTypes.INTEGER, allowNull: false },
        createdAt: { type: DataTypes.DATE, allowNull: true },
        updatedAt: { type: DataTypes.DATE, allowNull: true },
    }, {
        tableName: 'items_areas_aspects'
    });
    
}