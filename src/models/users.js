/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    user_email: {
      type: DataTypes.STRING(400),
      allowNull: false,
      unique: true
    },
    user_password: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    user_profile_type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    user_role: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },    
    customer_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'customers_groups',
        key: 'customer_group_id'
      }
    },
    is_disabled: {
      type: DataTypes.STRING(20),
      allowNull: true,
      default: '0'
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
    tableName: 'users'
  });
};