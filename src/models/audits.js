/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('audits', {
      audit_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement : true
      },
      audit_practical_order: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      audit_conformity: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      audit_evidnece_compliance: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      audit_control_action: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      area_aspect_id: {
          type: DataTypes.INTEGER,
          allowNull: true
      },
      document_item_id: {
          type: DataTypes.INTEGER,
          allowNull: true
      }
    }, {
      tableName: 'audits'
    });
  };
  