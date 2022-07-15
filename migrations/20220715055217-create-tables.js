'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('users', { 
      id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
      },
      username: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
      },
      email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      role: {
          type: Sequelize.STRING
      },
      permission: {
          type: Sequelize.INTEGER
      } 
    });

    await queryInterface.createTable('posts', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
      },
      description: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      image: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'created_at',
          defaultValue: Sequelize.NOW,
      },
      userId: {
          type: Sequelize.INTEGER,
          field: 'user_id'
      }
    });

    await queryInterface.createTable('comments', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
          allowNull: false,
          type: Sequelize.TEXT

      },
      createdAt: {
          allowNull: true,
          type: Sequelize.DATE,
          field: 'created_at',
          defaultValue: Sequelize.NOW,
      },
      post_id: {
          field: 'post_id',
          type: Sequelize.INTEGER
      },
      user_id: {
          field: 'user_id',
          type: Sequelize.INTEGER
      }
    });
},

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('posts');
    await queryInterface.dropTable('comments');
  }
};
