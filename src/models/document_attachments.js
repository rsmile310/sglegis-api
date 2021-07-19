module.exports = function (sequelize, DataTypes) {
    return sequelize.define('document_attachments', {
        attachment_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        attachment_item_id: { type: DataTypes.INTEGER, allowNull: false, Comment: 'Item do documento que o anexo está associado.'},
        attachment_description: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        attachment_src: {
            type: DataTypes.STRING(268),
            allowNull: true
        },
        document_id: { type: DataTypes.INTEGER, allowNull: false , Comment: 'ID do documento que este item pertence'}
    }, {
        tableName: 'document_attachments'
    });
};