const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * renameColumn(items_area_aspect_id) => "items_areas_aspects"
 * changeColumn(area_aspect_id) => "items_areas_aspects"
 * changeColumn(area_id) => "items_areas_aspects"
 * changeColumn(updatedAt) => "unities_areas_aspects"
 * changeColumn(createdAt) => "unities_areas_aspects"
 * changeColumn(customer_unity_id) => "unities_areas_aspects"
 * changeColumn(area_aspect_id) => "unities_areas_aspects"
 * changeColumn(area_id) => "unities_areas_aspects"
 *
 */

const info = {
  revision: 13,
  name: "notnull-x-area-aspect",
  created: "2021-05-15T16:11:43.003Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "items_areas_aspects",
      "area_aspect_id",
      { type: Sequelize.INTEGER, field: "area_aspect_id", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "items_areas_aspects",
      "area_id",
      { type: Sequelize.INTEGER, field: "area_id", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "unities_areas_aspects",
      "updatedAt",
      { type: Sequelize.DATE, field: "updatedAt", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "unities_areas_aspects",
      "createdAt",
      { type: Sequelize.DATE, field: "createdAt", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "unities_areas_aspects",
      "area_aspect_id",
      { type: Sequelize.INTEGER, field: "area_aspect_id", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "unities_areas_aspects",
      "area_id",
      { type: Sequelize.INTEGER, field: "area_id", allowNull: false },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "renameColumn",
    params: [
      "items_areas_aspects",
      "item_area_aspect_id",
      "items_area_aspect_id",
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "items_areas_aspects",
      "area_aspect_id",
      { type: Sequelize.INTEGER, field: "area_aspect_id", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "items_areas_aspects",
      "area_id",
      { type: Sequelize.INTEGER, field: "area_id", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "unities_areas_aspects",
      "updatedAt",
      { type: Sequelize.DATE, field: "updatedAt", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "unities_areas_aspects",
      "createdAt",
      { type: Sequelize.DATE, field: "createdAt", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "unities_areas_aspects",
      "area_aspect_id",
      { type: Sequelize.INTEGER, field: "area_aspect_id", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "unities_areas_aspects",
      "area_id",
      { type: Sequelize.INTEGER, field: "area_id", allowNull: true },
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
