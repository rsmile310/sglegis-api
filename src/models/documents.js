
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('documents', {
        document_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement : true },
        document_scope_id: { type: DataTypes.INTEGER, allowNull: false },
        document_type: { type: DataTypes.TEXT, allowNull: true },
        document_number: { type: DataTypes.TEXT, allowNull: true, defaultValue: 'S/N' },
        document_date: { type: DataTypes.DATE, allowNull: false },
        document_status_id: { type: DataTypes.INTEGER, allowNull: false },
        document_summary: { type: DataTypes.STRING(2000), allowNull: false },
        document_state_id: { type: DataTypes.INTEGER, allowNull: true, Comment: "The region of country document is valid (filled when scope = state)" },
        document_city_id: { type: DataTypes.INTEGER, allowNull: true, Comment: "The city of region (state) document is valid (filled when scope = city)" },
        createdAt: { type: DataTypes.DATE, allowNull: true },
        updatedAt: { type: DataTypes.DATE, allowNull: true}
    }, {
        tableName: 'documents'
    });
};