/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('states', {
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    state_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    uf: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'states'
  });
};
