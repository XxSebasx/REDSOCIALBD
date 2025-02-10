const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('SOCIALBD', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;