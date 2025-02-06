const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('SOCIALBD', 'root', 'MiContraseña2025!', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;