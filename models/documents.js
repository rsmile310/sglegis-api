
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('documents', {
        document_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
        document_scope_id: { type: DataTypes.INTEGER, allowNull: false },
        document_type: { type: DataTypes.TEXT, allowNull: true },
        document_number: { type: DataTypes.TEXT, allowNull: true, defaultValue: 'S/N' },
        document_date: { type: DataTypes.DATE, allowNull: true },
        document_status_id: { type: DataTypes.INTEGER, allowNull: false },
        document_summary: { type: DataTypes.STRING(2000), allowNull: false },
    }, {
        tableName: 'documents'
    });
};