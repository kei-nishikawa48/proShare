'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(
      'articles',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: Sequelize.STRING(250),
          allowNull: false,
        },
        text: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tags: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        user_id: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      },
      {
        charset: 'utf8mb4',
        timestamps: false
      }
    ),

  down: (queryInterface) => queryInterface.dropTable('users'),
};
