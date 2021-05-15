/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menus', {
    menu_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    menu_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    menu_link: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    menu_icon: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    menu_status: {
      type: DataTypes.STRING(1),
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
    tableName: 'menus'
  });
};
