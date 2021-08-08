
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('actionplan_items', {
        actionplan_item_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement:true },
        actionplan_id: { type: DataTypes.INTEGER, allowNull: false, references: {model:'actionplans', key:'actionplan_id'}, comment: 'The action plan which this item belong to' },
        activity: { type: DataTypes.TEXT, allowNull: false, comment: 'The activity description' },
        responsible: { type: DataTypes.STRING(50), allowNull: false, comment: 'The name of responsible`s action plan' },
        email: { type: DataTypes.STRING(50), allowNull: true, comment: 'Email`s resposible' },
        status: { type: DataTypes.INTEGER, default: 0, allowNull: false, comment: '0:new/open; 2:closed; 3:removed' },
        deadline: { type: DataTypes.DATE, allowNull: true, comment: 'The date responsible must finish the task' },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'actionplan_items'
    });
};