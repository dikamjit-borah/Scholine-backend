'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('STUDENTS_TABLEs', {
      u_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      admission_no:{
        type:Sequelize.INTEGER
      },
      date_of_admission:{
          type: Sequelize.DATE,
      },
      roll_no: {
        type: Sequelize.INTEGER
      },
      student_name: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATE
      },
      no_of_transfer_recipient:{
        type:Sequelize.INTEGER
      },
      class: {
        type: Sequelize.STRING
      },
      section: {
        type: Sequelize.STRING
      },
      caste: {
        type: Sequelize.STRING
      },
      religion: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      father_name: {
        type: Sequelize.STRING
      },
      father_occupation:{
        type: Sequelize.STRING
      },
      mother_name: {
        type: Sequelize.STRING
      },
      mother_occupation:{
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      pin: {
        type: Sequelize.INTEGER
      },
      contact_no_1: {
        type: Sequelize.STRING
      },
      contact_no_2: {
        type: Sequelize.STRING
      },
      is_transferred_student : {
        type: Sequelize.INTEGER
      },
      dp : {
        type: Sequelize.STRING
      },
      doc1 : {
        type: Sequelize.STRING
      },
      doc2: {
        type: Sequelize.STRING
      },
      doc3 : {
        type: Sequelize.STRING
      },
      doc4 : {
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
    await queryInterface.dropTable('STUDENTS_TABLEs');
  }
};