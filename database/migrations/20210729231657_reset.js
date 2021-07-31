const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "areas", deps: []
 * createTable() => "customers_groups", deps: []
 * createTable() => "document_attachments", deps: []
 * createTable() => "document_items", deps: []
 * createTable() => "document_scopes", deps: []
 * createTable() => "document_status", deps: []
 * createTable() => "documents", deps: []
 * createTable() => "groups", deps: []
 * createTable() => "groups_users", deps: []
 * createTable() => "items_areas_aspects", deps: []
 * createTable() => "menus", deps: []
 * createTable() => "menus_groups", deps: []
 * createTable() => "responsibles_aspects", deps: []
 * createTable() => "states", deps: []
 * createTable() => "unities_areas_aspects", deps: []
 * createTable() => "unities_aspects_responsibles", deps: []
 * createTable() => "unities_contacts", deps: []
 * createTable() => "areas_aspects", deps: [areas]
 * createTable() => "cities", deps: [states]
 * createTable() => "ceps", deps: [cities, states]
 * createTable() => "customers", deps: [customers_groups]
 * createTable() => "customers_unities", deps: [cities, states, customers]
 * createTable() => "users", deps: [customers]
 *
 */

const info = {
  revision: 1,
  name: "reset",
  created: "2021-07-29T23:16:57.847Z",
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
        attachment_description: {
          type: Sequelize.STRING(200),
          field: "attachment_description",
          allowNull: true,
        },
        attachment_src: {
          type: Sequelize.STRING(268),
          field: "attachment_src",
          allowNull: true,
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
          type: Sequelize.TEXT,
          field: "document_item_description",
          Comment: "Descritivo do item",
          allowNull: true,
        },
        document_item_observation: {
          type: Sequelize.TEXT,
          field: "document_item_observation",
          Comment: "Observações do usuário ref. ao item",
          allowNull: true,
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
      "documents",
      {
        document_id: {
          type: Sequelize.INTEGER,
          field: "document_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
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
        document_state_id: {
          type: Sequelize.INTEGER,
          field: "document_state_id",
          Comment:
            "The region of country document is valid (filled when scope = state)",
          allowNull: true,
        },
        document_city_id: {
          type: Sequelize.INTEGER,
          field: "document_city_id",
          Comment:
            "The city of region (state) document is valid (filled when scope = city)",
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
      "items_areas_aspects",
      {
        item_area_aspect_id: {
          type: Sequelize.INTEGER,
          field: "item_area_aspect_id",
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
      "responsibles_aspects",
      {
        responsible_aspect_id: {
          type: Sequelize.INTEGER,
          field: "responsible_aspect_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        area_aspect_id: {
          type: Sequelize.INTEGER,
          field: "area_aspect_id",
          allowNull: false,
        },
        unity_aspect_responsible_id: {
          type: Sequelize.INTEGER,
          field: "unity_aspect_responsible_id",
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
        area_id: {
          type: Sequelize.INTEGER,
          field: "area_id",
          references: { model: "areas", key: "area_id" },
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
      "ceps",
      {
        cep_id: {
          type: Sequelize.INTEGER,
          field: "cep_id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        city_id: {
          type: Sequelize.INTEGER,
          field: "city_id",
          references: { model: "cities", key: "city_id" },
          allowNull: false,
        },
        state_id: {
          type: Sequelize.INTEGER,
          field: "state_id",
          references: { model: "states", key: "state_id" },
          allowNull: false,
        },
        type: { type: Sequelize.STRING(100), field: "type", allowNull: true },
        street_name: {
          type: Sequelize.STRING(200),
          field: "street_name",
          allowNull: true,
        },
        district_name: {
          type: Sequelize.STRING(100),
          field: "district_name",
          allowNull: true,
        },
        cep: { type: Sequelize.INTEGER, field: "cep", allowNull: false },
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
        customer_id: {
          type: Sequelize.INTEGER,
          field: "customer_id",
          references: { model: "customers", key: "customer_id" },
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
      "users",
      {
        user_id: {
          type: Sequelize.INTEGER,
          field: "user_id",
          autoIncrement: true,
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
          type: Sequelize.STRING(200),
          field: "user_password",
          allowNull: true,
        },
        user_profile_type: {
          type: Sequelize.STRING(20),
          field: "user_profile_type",
          allowNull: false,
        },
        user_role: {
          type: Sequelize.STRING(20),
          field: "user_role",
          allowNull: false,
        },
        customer_id: {
          type: Sequelize.INTEGER,
          field: "customer_id",
          references: { model: "customers", key: "customer_id" },
          allowNull: true,
        },
        is_disabled: {
          type: Sequelize.STRING(20),
          field: "is_disabled",
          default: "0",
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
    params: ["ceps", { transaction }],
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
    params: ["items_areas_aspects", { transaction }],
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
    params: ["responsibles_aspects", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["states", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["unities_areas_aspects", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["unities_aspects_responsibles", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["unities_contacts", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["users", { transaction }],
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
