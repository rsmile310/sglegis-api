/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('areas_aspects', {
    area_aspect_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    area_aspect_name: {
      type: DataTypes.STRING(100),
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
    tableName: 'areas_aspects'
  });
};
