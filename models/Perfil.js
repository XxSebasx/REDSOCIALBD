const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const usuario = sequelize.define('usuario', {
    ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuarioID:{
        type: DataTypes.INTEGER,
        references: {
            model: 'usuarios',
            key: 'ID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        validate:{
            len: [1,100]
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
        validate:{
            len: [8]
        }
    }
}, { 
    tableName: 'perfiles',
    timestamps: false
});

module.exports = cliente;