const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "document_attachments", deps: []
 * createTable() => "document_items", deps: []
 * createTable() => "document_scopes", deps: []
 * createTable() => "document_status", deps: []
 * createTable() => "documents", deps: []
 *
 */

const info = {
  revision: 2,
  name: "documents-tables",
  created: "2021-05-02T21:20:50.973Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "document_attachments",
      {
        attachment_id: {
          type: Sequelize.INTEGER,
          field: "attachment_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        attachment_item_id: {
          type: Sequelize.INTEGER,
          field: "attachment_item_id",
          Comment: "Item do documento que o anexo está associado.",
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
    fn: "createTable",
    params: [
      "document_items",
      {
        document_item_id: {
          type: Sequelize.INTEGER,
          field: "document_item_id",
          Comment: "Id automático",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        document_item_subject: {
          type: Sequelize.TEXT,
          field: "document_item_subject",
          Comment: "Assunto do item do documento",
          allowNull: false,
        },
        document_item_number: {
          type: Sequelize.TEXT,
          field: "document_item_number",
          Comment: "Código de identificação do documento (livre)",
          allowNull: false,
        },
        document_item_order: {
          type: Sequelize.INTEGER,
          field: "document_item_order",
          Comment: "Ordem de exibição na lista de itens",
          allowNull: false,
        },
        document_item_status_id: {
          type: Sequelize.INTEGER,
          field: "document_item_status_id",
          Comment: "Status do documento (document_status)",
          allowNull: false,
        },
        document_item_description: {
          type: Sequelize.STRING(2000),
          field: "document_item_description",
          Comment: "Descritivo do item",
          allowNull: false,
        },
        document_item_observation: {
          type: Sequelize.STRING(2000),
          field: "document_item_observation",
          Comment: "Observações do usuário ref. ao item",
          allowNull: false,
        },
        document_id: {
          type: Sequelize.INTEGER,
          field: "document_id",
          Comment: "ID do documento que este item pertence",
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
    fn: "createTable",
    params: [
      "document_scopes",
      {
        document_scope_id: {
          type: Sequelize.INTEGER,
          field: "document_scope_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        document_scope_description: {
          type: Sequelize.TEXT,
          field: "document_scope_description",
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
    fn: "createTable",
    params: [
      "document_status",
      {
        status_id: {
          type: Sequelize.INTEGER,
          field: "status_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        status_description: {
          type: Sequelize.TEXT,
          field: "status_description",
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
    fn: "createTable",
    params: [
      "documents",
      {
        document_id: {
          type: Sequelize.INTEGER,
          field: "document_id",
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        document_scope_id: {
          type: Sequelize.INTEGER,
          field: "document_scope_id",
          allowNull: false,
        },
        document_type: {
          type: Sequelize.TEXT,
          field: "document_type",
          allowNull: true,
        },
        document_number: {
          type: Sequelize.TEXT,
          field: "document_number",
          defaultValue: "S/N",
          allowNull: true,
        },
        document_date: {
          type: Sequelize.DATE,
          field: "document_date",
          allowNull: true,
        },
        document_status_id: {
          type: Sequelize.INTEGER,
          field: "document_status_id",
          allowNull: false,
        },
        document_summary: {
          type: Sequelize.STRING(2000),
          field: "document_summary",
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
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["document_attachments", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["document_items", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["document_scopes", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["document_status", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["documents", { transaction }],
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
