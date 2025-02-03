const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const perfil = sequelize.define('perfil', {
    ID:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    direccion:{
        type: DataTypes.STRING,
        allowNull: false,
        require: false,
        validate:{
            len: [1,100]
        }
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull: false,
        require: false,
        validate:{
            len: [10,15]
        }
    },
    fecha:{
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        require: false
    },
    fotoPerfil:{
        type: DataTypes.STRING,
        allowNull: false,
        require: false,
        validate:{
            isURL: true
        }
    }
}, { 
    tableName: 'usuarios',
    timestamps: false
});

module.exports = usuario;