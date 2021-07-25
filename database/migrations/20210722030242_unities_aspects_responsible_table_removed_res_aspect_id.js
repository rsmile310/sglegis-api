const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(responsible_aspect_id) => "unities_aspects_responsibles"
 *
 */

const info = {
  revision: 68,
  name: "unities_aspects_responsible_table_removed_res_aspect_id",
  created: "2021-07-22T03:02:42.719Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: [
      "unities_aspects_responsibles",
      "responsible_aspect_id",
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "unities_aspects_responsibles",
      "responsible_aspect_id",
      {
        type: Sequelize.INTEGER,
        field: "responsible_aspect_id",
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
