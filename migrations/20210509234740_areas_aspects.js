const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(area_id) => "areas_aspects"
 * changeColumn(updatedAt) => "documents"
 * changeColumn(createdAt) => "documents"
 * changeColumn(document_id) => "documents"
 * changeColumn(updatedAt) => "document_status"
 * changeColumn(createdAt) => "document_status"
 *
 */

const info = {
  revision: 8,
  name: "areas_aspects",
  created: "2021-05-09T23:47:40.991Z",
  comment: "",
};

const migrationCommands = (transaction) => [  
  {
    fn: "changeColumn",
    params: [
      "documents",
      "updatedAt",
      { type: Sequelize.DATE, field: "updatedAt", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "documents",
      "createdAt",
      { type: Sequelize.DATE, field: "createdAt", allowNull: true },
      { transaction },
    ],
  },  
  {
    fn: "changeColumn",
    params: [
      "document_status",
      "updatedAt",
      { type: Sequelize.DATE, field: "updatedAt", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "document_status",
      "createdAt",
      { type: Sequelize.DATE, field: "createdAt", allowNull: true },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["areas_aspects", "area_id", { transaction }],
  },
  {
    fn: "changeColumn",
    params: [
      "documents",
      "updatedAt",
      { type: Sequelize.DATE, field: "updatedAt", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "documents",
      "createdAt",
      { type: Sequelize.DATE, field: "createdAt", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "documents",
      "document_id",
      {
        type: Sequelize.INTEGER,
        field: "document_id",
        primaryKey: true,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "document_status",
      "updatedAt",
      { type: Sequelize.DATE, field: "updatedAt", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "document_status",
      "createdAt",
      { type: Sequelize.DATE, field: "createdAt", allowNull: false },
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
