const { DataTypes } = require('sequelize/types')

module.exports = function (sequelize, Datatypes) {
    return sequelize.define('documents', {
        document_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
        document_scope_id: { type: Datatypes.INTEGER, allowNull: false },
        document_type: { type: Datatypes.TEXT, allowNull: true },
        document_number: { type: DataTypes.TEXT, allowNull: true, defaultValue: 'S/N' },
        document_date: { type: DataTypes.DATE, allowNull: true },
        document_status_id: { type: DataTypes.INTEGER, allowNull: false },
        document_summary: { type: Datatypes.STRING(2000), allowNull: false },
    })
}