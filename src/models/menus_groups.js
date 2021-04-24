/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menus_groups', {
    menus_menu_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    groups_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'menus_groups'
  });
};
