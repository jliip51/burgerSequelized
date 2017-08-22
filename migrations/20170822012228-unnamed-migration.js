'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('Burgers', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        burger_name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        devoured: {
          allowNull: false,
          defaultValue: false,
          type: Sequelize.BOOLEAN
        },
        count_eaten: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: false,
          defaultValue: 0,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Burgers');
  }
};
