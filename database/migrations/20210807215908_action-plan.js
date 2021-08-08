const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "actionplans", deps: []
 * createTable() => "actionplan_items", deps: [actionplans]
 *
 */

const info = {
  revision: 2,
  name: "action-plan",
  created: "2021-08-07T21:59:08.833Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "actionplans",
      {
        actionplan_id: {
          type: Sequelize.INTEGER,
          field: "actionplan_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        unit_id: {
          type: Sequelize.INTEGER,
          field: "unit_id",
          comment: "The unit",
          allowNull: false,
        },
        item_area_aspect_id: {
          type: Sequelize.INTEGER,
          field: "item_area_aspect_id",
          comment: "The item and aspect matched on unit",
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          field: "user_id",
          comment: "The user logged who inserted the action plan",
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
      "actionplan_items",
      {
        actionplan_item_id: {
          type: Sequelize.INTEGER,
          field: "actionplan_item_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        actionplan_id: {
          type: Sequelize.INTEGER,
          field: "actionplan_id",
          comment: "The action plan which this item belong to",
          references: { model: "actionplans", key: "actionplan_id" },
          allowNull: false,
        },
        activity: {
          type: Sequelize.TEXT,
          field: "activity",
          comment: "The activity description",
          allowNull: false,
        },
        responsible: {
          type: Sequelize.STRING(50),
          field: "responsible",
          comment: "The name of responsible`s action plan",
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(50),
          field: "email",
          comment: "Email`s resposible",
          allowNull: true,
        },
        status: {
          type: Sequelize.INTEGER,
          field: "status",
          comment: "0:new/open; 2:closed; 3:removed",
          allowNull: false,
          default: 0,
        },
        deadline: {
          type: Sequelize.DATE,
          field: "deadline",
          comment: "The date responsible must finish the task",
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
    params: ["actionplan_items", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["actionplans", { transaction }],
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
