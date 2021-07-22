/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers_unities', {
    customer_unity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    customer_unity_cnpj: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    customer_unity_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    customer_unity_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    customer_unity_city_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cities',
        key: 'city_id'
      }
    },
    customer_unity_uf_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'states',
        key: 'state_id'
      }
    },
    customer_unity_cep: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
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
    tableName: 'customers_unities'
  });
};
