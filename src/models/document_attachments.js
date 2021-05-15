module.exports = function (sequelize, DataTypes) {
    return sequelize.define('document_attachments', {
        attachment_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        attachment_item_id: { type: DataTypes.INTEGER, allowNull: false, Comment: 'Item do documento que o anexo está associado.'}
    }, {
        tableName: 'document_attachments'
    });
};