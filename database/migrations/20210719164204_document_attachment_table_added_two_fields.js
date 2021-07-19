const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(attachment_src) => "document_attachments"
 * addColumn(attachment_description) => "document_attachments"
 *
 */

const info = {
  revision: 47,
  name: "document_attachment_table_added_two_fields",
  created: "2021-07-19T16:42:04.294Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "document_attachments",
      "attachment_src",
      { type: Sequelize.STRING(268), field: "attachment_src", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "document_attachments",
      "attachment_description",
      {
        type: Sequelize.STRING(200),
        field: "attachment_description",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["document_attachments", "attachment_src", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["document_attachments", "attachment_description", { transaction }],
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
