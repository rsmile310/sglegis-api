module.exports = function (sequelize, DataTypes) {
    return sequelize.define('document_scopes', {
        document_scope_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        document_scope_description: { type: DataTypes.TEXT, allowNull: false }
    }, {
        tableName: 'document_scopes'
    });
};