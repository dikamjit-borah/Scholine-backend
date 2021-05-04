'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FEE_STRUCTURE_TABLEs', {
  
      class: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      admission: {
        type: Sequelize.INTEGER
      },
      monthly: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('FEE_STRUCTURE_TABLEs');
  }
};