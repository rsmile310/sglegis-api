module.exports = function (sequelize, DataTypes) {
    return sequelize.define('document_status', {
        status_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        status_description: { type: DataTypes.TEXT, allowNull: false }
    }, {
        tableName: 'document_status'
    });
};