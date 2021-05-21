const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "areas", deps: []
 * createTable() => "areas_aspects", deps: []
 * createTable() => "customers_groups", deps: []
 * createTable() => "groups", deps: []
 * createTable() => "groups_users", deps: []
 * createTable() => "menus", deps: []
 * createTable() => "menus_groups", deps: []
 * createTable() => "states", deps: []
 * createTable() => "uesrs", deps: []
 * createTable() => "unities_contacts", deps: []
 * createTable() => "cities", deps: [states]
 * createTable() => "customers", deps: [customers_groups]
 * createTable() => "customers_unities", deps: [cities, states]
 *
 */

const info = {
  revision: 1,
  name: "initial-migration",
  created: "2021-04-24T21:53:27.841Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "areas",
      {
        area_id: {
          type: Sequelize.INTEGER,
          field: "area_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        area_name: {
          type: Sequelize.STRING(100),
          field: "area_name",
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
    fn: "createTable",
    params: [
      "areas_aspects",
      {
        area_aspect_id: {
          type: Sequelize.INTEGER,
          field: "area_aspect_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        area_aspect_name: {
          type: Sequelize.STRING(100),
          field: "area_aspect_name",
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
  {
    fn: "createTable",
    params: [
      "customers_groups",
      {
        customer_group_id: {
          type: Sequelize.INTEGER,
          field: "customer_group_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        customer_group_name: {
          type: Sequelize.STRING(50),
          field: "customer_group_name",
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
  {
    fn: "createTable",
    params: [
      "groups",
      {
        group_id: {
          type: Sequelize.INTEGER,
          field: "group_id",
          primaryKey: true,
          allowNull: false,
        },
        group_name: {
          type: Sequelize.STRING(45),
          field: "group_name",
          allowNull: true,
        },
        group_description: {
          type: Sequelize.STRING(100),
          field: "group_description",
          allowNull: true,
        },
        group_status: {
          type: Sequelize.STRING(1),
          field: "group_status",
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
  {
    fn: "createTable",
    params: [
      "groups_users",
      {
        groups_group_id: {
          type: Sequelize.INTEGER,
          field: "groups_group_id",
          primaryKey: true,
          allowNull: false,
        },
        uesrs_user_id: {
          type: Sequelize.INTEGER,
          field: "uesrs_user_id",
          primaryKey: true,
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
      "menus",
      {
        menu_id: {
          type: Sequelize.INTEGER,
          field: "menu_id",
          primaryKey: true,
          allowNull: false,
        },
        menu_name: {
          type: Sequelize.STRING(45),
          field: "menu_name",
          allowNull: true,
        },
        menu_link: {
          type: Sequelize.STRING(400),
          field: "menu_link",
          allowNull: true,
        },
        menu_icon: {
          type: Sequelize.STRING(45),
          field: "menu_icon",
          allowNull: true,
        },
        menu_status: {
          type: Sequelize.STRING(1),
          field: "menu_status",
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
  {
    fn: "createTable",
    params: [
      "menus_groups",
      {
        menus_menu_id: {
          type: Sequelize.INTEGER,
          field: "menus_menu_id",
          primaryKey: true,
          allowNull: false,
        },
        groups_group_id: {
          type: Sequelize.INTEGER,
          field: "groups_group_id",
          primaryKey: true,
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
      "states",
      {
        state_id: {
          type: Sequelize.INTEGER,
          field: "state_id",
          primaryKey: true,
          allowNull: false,
        },
        state_name: {
          type: Sequelize.STRING(45),
          field: "state_name",
          allowNull: true,
        },
        uf: { type: Sequelize.STRING(2), field: "uf", allowNull: true },
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
  {
    fn: "createTable",
    params: [
      "unities_contacts",
      {
        unity_contact_id: {
          type: Sequelize.INTEGER,
          field: "unity_contact_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        unity_contact_name: {
          type: Sequelize.STRING(50),
          field: "unity_contact_name",
          allowNull: true,
        },
        unity_contact_email: {
          type: Sequelize.STRING(100),
          field: "unity_contact_email",
          allowNull: true,
        },
        unity_contact_phone: {
          type: Sequelize.STRING(25),
          field: "unity_contact_phone",
          allowNull: true,
        },
        unity_contact_observation: {
          type: Sequelize.STRING(200),
          field: "unity_contact_observation",
          allowNull: true,
        },
        unity_contact_customer_unity_id: {
          type: Sequelize.INTEGER,
          field: "unity_contact_customer_unity_id",
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
  {
    fn: "createTable",
    params: [
      "cities",
      {
        city_id: {
          type: Sequelize.INTEGER,
          field: "city_id",
          primaryKey: true,
          allowNull: false,
        },
        state_id: {
          type: Sequelize.INTEGER,
          field: "state_id",
          references: { model: "states", key: "state_id" },
          allowNull: true,
        },
        city_name: {
          type: Sequelize.STRING(100),
          field: "city_name",
          allowNull: true,
        },
        uf: { type: Sequelize.STRING(2), field: "uf", allowNull: true },
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
      "customers",
      {
        customer_id: {
          type: Sequelize.INTEGER,
          field: "customer_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        customer_business_name: {
          type: Sequelize.STRING(100),
          field: "customer_business_name",
          allowNull: true,
        },
        customer_trade_name: {
          type: Sequelize.STRING(100),
          field: "customer_trade_name",
          allowNull: true,
        },
        customer_cnpj: {
          type: Sequelize.STRING(20),
          field: "customer_cnpj",
          allowNull: true,
        },
        customer_group_id: {
          type: Sequelize.INTEGER,
          field: "customer_group_id",
          references: { model: "customers_groups", key: "customer_group_id" },
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
    fn: "createTable",
    params: [
      "customers_unities",
      {
        customer_unity_id: {
          type: Sequelize.INTEGER,
          field: "customer_unity_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        customer_unity_cnpj: {
          type: Sequelize.STRING(20),
          field: "customer_unity_cnpj",
          allowNull: true,
        },
        customer_unity_name: {
          type: Sequelize.STRING(100),
          field: "customer_unity_name",
          allowNull: true,
        },
        customer_unity_address: {
          type: Sequelize.STRING(100),
          field: "customer_unity_address",
          allowNull: true,
        },
        customer_unity_city_id: {
          type: Sequelize.INTEGER,
          field: "customer_unity_city_id",
          references: { model: "cities", key: "city_id" },
          allowNull: true,
        },
        customer_unity_uf_id: {
          type: Sequelize.INTEGER,
          field: "customer_unity_uf_id",
          references: { model: "states", key: "state_id" },
          allowNull: true,
        },
        customer_unity_cep: {
          type: Sequelize.STRING(9),
          field: "customer_unity_cep",
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
    params: ["areas", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["areas_aspects", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["cities", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["customers", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["customers_groups", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["customers_unities", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["groups", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["groups_users", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["menus", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["menus_groups", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["states", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["uesrs", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["unities_contacts", { transaction }],
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
