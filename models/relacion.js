const Perfil = require('./Perfil');
const Usuario = require('./Usuario');
Usuario.hasMany(Perfil, { foreignKey: 'clienteID' });
Perfil.belongsTo(Usuario, { foreignKey: 'clienteID' });

module.exports = {
    Usuario,
    Perfil
}