'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FEES_LOG_TABLEs', {
    
      student_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      admission: {
        type: Sequelize.INTEGER
      },
      monthly: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('FEES_LOG_TABLEs');
  }
};