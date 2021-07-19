const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(customer_group_id) => "users"
 * changeColumn(client_id) => "users"
 *
 */

const info = {
  revision: 42,
  name: "users_table_added_customers_groups_changed_customer_id",
  created: "2021-07-16T08:18:18.036Z",
  comment: "",
};

const migrationCommands = (transaction) => [
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
  {
    fn: "changeColumn",
    params: [
      "users",
      "client_id",
      {
        type: Sequelize.INTEGER,
        field: "client_id",
        references: { model: "users", key: "user_id" },
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["users", "customer_group_id", { transaction }],
  },
  {
    fn: "changeColumn",
    params: [
      "users",
      "client_id",
      { type: Sequelize.INTEGER, field: "client_id", allowNull: true },
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
