'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('STUDENT_TRANSFER_TABLEs', {
      student_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      affiliated_to_college: {
        type: Sequelize.STRING
      },
      sub1: {
        type: Sequelize.STRING
      },
      sub2: {
        type: Sequelize.STRING
      },
      sub3: {
        type: Sequelize.STRING
      },
      sub4: {
        type: Sequelize.STRING
      },
      sub5: {
        type: Sequelize.STRING
      },
      sub6: {
        type: Sequelize.STRING
      },
      transfer_certificate_no: {
        type: Sequelize.STRING
      },
      date_of_issue: {
        type: Sequelize.DATE
      },
      last_attended_school: {
        type: Sequelize.STRING
      },
      last_attended_class: {
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
    await queryInterface.dropTable('STUDENT_TRANSFER_TABLEs');
  }
};