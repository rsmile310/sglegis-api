const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "audits", deps: []
 *
 */

const info = {
  revision: 86,
  name: "audits_table",
  created: "2021-07-31T08:20:01.894Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "audits",
      {
        audit_id: {
          type: Sequelize.INTEGER,
          field: "audit_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        audit_practical_order: {
          type: Sequelize.INTEGER,
          field: "audit_practical_order",
          allowNull: true,
        },
        audit_conformity: {
          type: Sequelize.INTEGER,
          field: "audit_conformity",
          allowNull: true,
        },
        audit_evidnece_compliance: {
          type: Sequelize.TEXT,
          field: "audit_evidnece_compliance",
          allowNull: true,
        },
        audit_control_action: {
          type: Sequelize.TEXT,
          field: "audit_control_action",
          allowNull: true,
        },
        area_aspect_id: {
          type: Sequelize.INTEGER,
          field: "area_aspect_id",
          allowNull: true,
        },
        document_item_id: {
          type: Sequelize.INTEGER,
          field: "document_item_id",
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
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["audits", { transaction }],
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
