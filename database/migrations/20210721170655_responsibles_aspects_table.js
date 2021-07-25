const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "responsibles_aspects", deps: []
 *
 */

const info = {
  revision: 66,
  name: "responsibles_aspects_table",
  created: "2021-07-21T17:06:55.004Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "responsibles_aspects",
      {
        responsible_aspect_id: {
          type: Sequelize.INTEGER,
          field: "responsible_aspect_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        area_aspect_id: {
          type: Sequelize.INTEGER,
          field: "area_aspect_id",
          allowNull: false,
        },
        unity_aspect_responsible_id: {
          type: Sequelize.INTEGER,
          field: "unity_aspect_responsible_id",
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["responsibles_aspects", { transaction }],
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
