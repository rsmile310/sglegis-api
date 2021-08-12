const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(actionplan_id) => "actionplan_items"
 *
 */

const info = {
  revision: 89,
  name: "noname",
  created: "2021-08-12T15:58:59.664Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["actionplan_items", "actionplan_id", { transaction }],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "actionplan_items",
      "actionplan_id",
      {
        type: Sequelize.INTEGER,
        field: "actionplan_id",
        comment: "The action plan which this item belong to",
        allowNull: false,
      },
      { transaction },
    ],
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
