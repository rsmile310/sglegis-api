const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "ceps", deps: [cities]
 *
 */

const info = {
  revision: 4,
  name: "ceps",
  created: "2021-05-04T00:26:14.797Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "ceps",
      {
        cep_id: {
          type: Sequelize.INTEGER,
          field: "cep_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        city_id: {
          type: Sequelize.INTEGER,
          field: "city_id",
          references: { model: "cities", key: "city_id" },
          allowNull: false,
        },
        type: { type: Sequelize.STRING(100), field: "type", allowNull: true },
        street_name: {
          type: Sequelize.STRING(100),
          field: "street_name",
          allowNull: true,
        },
        district_name: {
          type: Sequelize.STRING(100),
          field: "district_name",
          allowNull: true,
        },
        cep: { type: Sequelize.INTEGER, field: "cep", allowNull: false },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: true,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["ceps", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
