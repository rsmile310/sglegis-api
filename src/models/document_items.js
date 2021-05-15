module.exports = function (sequelize, DataTypes) {
    return sequelize.define('document_items', {
        document_item_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, Comment: 'Id automático' },
        document_item_subject: { type: DataTypes.TEXT, allowNull: false , Comment: 'Assunto do item do documento'},
        document_item_number: { type: DataTypes.TEXT, allowNull: false , Comment: 'Código de identificação do documento (livre)'},
        document_item_order: { type: DataTypes.INTEGER, allowNull: false , Comment: 'Ordem de exibição na lista de itens'},
        document_item_status_id: { type: DataTypes.INTEGER, allowNull: false , Comment: 'Status do documento (document_status)'},
        document_item_description: { type: DataTypes.STRING(2000), allowNull: false , Comment: 'Descritivo do item'},
        document_item_observation: { type: DataTypes.STRING(2000), allowNull: false , Comment: 'Observações do usuário ref. ao item'},
        document_id: { type: DataTypes.INTEGER, allowNull: false , Comment: 'ID do documento que este item pertence'}
    }, {
        tableName: 'document_items'
    });
};