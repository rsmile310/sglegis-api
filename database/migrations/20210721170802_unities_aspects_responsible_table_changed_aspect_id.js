const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * renameColumn(area_aspect_id) => "unities_aspects_responsibles"
 *
 */

const info = {
  revision: 67,
  name: "unities_aspects_responsible_table_changed_aspect_id",
  created: "2021-07-21T17:08:02.510Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "renameColumn",
    params: [
      "unities_aspects_responsibles",
      "area_aspect_id",
      "responsible_aspect_id",
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "renameColumn",
    params: [
      "unities_aspects_responsibles",
      "responsible_aspect_id",
      "area_aspect_id",
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
