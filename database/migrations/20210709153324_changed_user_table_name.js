const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * dropTable() => "uesrs", deps: []
 * createTable() => "users", deps: []
 *
 */

const info = {
  revision: 18,
  name: "changed_user_table_name",
  created: "2021-07-09T15:33:24.841Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["uesrs", { transaction }],
  },
  {
    fn: "createTable",
    params: [
      "users",
      {
        user_id: {
          type: Sequelize.INTEGER,
          field: "user_id",
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        user_name: {
          type: Sequelize.STRING(50),
          field: "user_name",
          allowNull: true,
        },
        user_email: {
          type: Sequelize.STRING(400),
          field: "user_email",
          allowNull: true,
        },
        user_password: {
          type: Sequelize.STRING(40),
          field: "user_password",
          allowNull: true,
        },        
        user_profile_type: {
          type: Sequelize.STRING(20),
          field: "user_profile_type",
          allowNull: false
        },
        user_role: {
          type: Sequelize.STRING(20),
          field: "user_role",
          allowNull: false
        },
        user_change_password: {
          type: Sequelize.STRING(1),
          field: "user_change_password",
          allowNull: true,
        },
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
    params: ["users", { transaction }],
  },
  {
    fn: "createTable",
    params: [
      "uesrs",
      {
        user_id: {
          type: Sequelize.INTEGER,
          field: "user_id",
          primaryKey: true,
          allowNull: false,
        },
        user_name: {
          type: Sequelize.STRING(50),
          field: "user_name",
          allowNull: true,
        },
        user_email: {
          type: Sequelize.STRING(400),
          field: "user_email",
          allowNull: true,
        },
        user_password: {
          type: Sequelize.STRING(40),
          field: "user_password",
          allowNull: true,
        },
        user_first_access: {
          type: Sequelize.STRING(1),
          field: "user_first_access",
          allowNull: true,
        },
        user_status: {
          type: Sequelize.STRING(1),
          field: "user_status",
          allowNull: true,
        },
        user_change_password: {
          type: Sequelize.STRING(1),
          field: "user_change_password",
          allowNull: true,
        },
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
