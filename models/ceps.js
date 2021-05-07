/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('ceps',
        {
            cep_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            city_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'cities',
                    key: 'city_id'
                }
            },
            state_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'states',
                    key: 'state_id'
                }                
            },
            type: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            street_name: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            district_name: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            cep: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: true
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },        
        {
            tableName: 'ceps'
        }
    );
};
