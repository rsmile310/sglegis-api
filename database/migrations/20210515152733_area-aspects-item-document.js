const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "items_areas_aspects", deps: []
 * createTable() => "uesrs", deps: []
 *
 */

const info = {
  revision: 12,
  name: "area-aspects-item-document",
  created: "2021-05-15T15:27:33.064Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "items_areas_aspects",
      {
        items_area_aspect_id: {
          type: Sequelize.INTEGER,
          field: "items_area_aspect_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        area_id: { type: Sequelize.INTEGER, field: "area_id", allowNull: true },
        area_aspect_id: {
          type: Sequelize.INTEGER,
          field: "area_aspect_id",
          allowNull: true,
        },
        document_item_id: {
          type: Sequelize.INTEGER,
          field: "document_item_id",
          allowNull: false,
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

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["items_areas_aspects", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["uesrs", { transaction }],
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
