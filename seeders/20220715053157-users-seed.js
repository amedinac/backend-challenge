'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [{
          id: 1,
          username: 'John Doe',
          email: 'john@admin.com',
          password: '1234',
          role: 'admin',
          permission: 1
        },
        {
          id: 1,
          username: 'Jane Doe',
          email: 'Jane@user.com',
          password: '4321',
          role: 'user',
          permission: 2
          }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('users', null, {});
  }
};
