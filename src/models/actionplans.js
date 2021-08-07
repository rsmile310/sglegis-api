
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('actionplans', {
        actionplan_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
        activity: { type: DataTypes.TEXT, allowNull: false, comment: 'The activity description' },
        responsible: { type: DataTypes.STRING(50), allowNull: false, comment: 'The name of responsible`s action plan' },
        email: { type: DataTypes.STRING(50), allowNull: true, comment: 'Email`s resposible' },
        deadline: { type: DataTypes.DATE, allowNull: true, comment: 'The date responsible must finish the task' }
    }, {
        tableName: 'actionplans'
    });
};