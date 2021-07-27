const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(customer_group_id) => "users"
 * addColumn(customer_id) => "users"
 *
 */

const info = {
  revision: 73,
  name: "noname",
  created: "2021-07-27T11:57:16.589Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["users", "customer_group_id", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "users",
      "customer_id",
      {
        type: Sequelize.INTEGER,
        field: "customer_id",
        references: { model: "customers", key: "customer_id" },
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["users", "customer_id", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "users",
      "customer_group_id",
      {
        type: Sequelize.INTEGER,
        field: "customer_group_id",
        references: { model: "customers_groups", key: "customer_group_id" },
        allowNull: true,
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
