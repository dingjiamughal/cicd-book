const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize/seq');

const User = sequelize.define('user', {
    user: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'username',
        comment: '用户名'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'password',
        comment: '密码'
    }
});

module.exports = User;
