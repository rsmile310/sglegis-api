const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * dropTable() => "unities_areas_aspects", deps: []
 * createTable() => "unities_aspects_responsibles", deps: []
 * changeColumn(user_email) => "users"
 *
 */

const info = {
  revision: 64,
  name: "unities_aspects_responsibles_table",
  created: "2021-07-21T15:33:49.994Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["unities_areas_aspects", { transaction }],
  },
  {
    fn: "createTable",
    params: [
      "unities_aspects_responsibles",
      {
        unity_aspect_responsible_id: {
          type: Sequelize.INTEGER,
          field: "unity_aspect_responsible_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        area_aspect_id: {
          type: Sequelize.INTEGER,
          field: "area_aspect_id",
          allowNull: false,
        },
        customer_unity_id: {
          type: Sequelize.INTEGER,
          field: "customer_unity_id",
          allowNull: false,
        },
        unity_aspect_responsible_name: {
          type: Sequelize.STRING(50),
          field: "unity_aspect_responsible_name",
          allowNull: true,
        },
        unity_aspect_responsible_email: {
          type: Sequelize.STRING(400),
          field: "unity_aspect_responsible_email",
          allowNull: true,
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
  {
    fn: "changeColumn",
    params: [
      "users",
      "user_email",
      { type: Sequelize.STRING(400), field: "user_email", allowNull: true },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["unities_aspects_responsibles", { transaction }],
  },
  {
    fn: "createTable",
    params: [
      "unities_areas_aspects",
      {
        unity_area_aspect_id: {
          type: Sequelize.INTEGER,
          field: "unity_area_aspect_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        area_id: {
          type: Sequelize.INTEGER,
          field: "area_id",
          allowNull: false,
        },
        area_aspect_id: {
          type: Sequelize.INTEGER,
          field: "area_aspect_id",
          allowNull: false,
        },
        customer_unity_id: {
          type: Sequelize.INTEGER,
          field: "customer_unity_id",
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
  {
    fn: "changeColumn",
    params: [
      "users",
      "user_email",
      {
        type: Sequelize.STRING(400),
        field: "user_email",
        unique: true,
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
