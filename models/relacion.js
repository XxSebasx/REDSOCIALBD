const Perfil = require('./Perfil');
const Usuario = require('./Usuario');
Usuario.hasOne(Perfil, { foreignKey: 'usuarioID' });
Perfil.belongsTo(Usuario, { foreignKey: 'usuarioID' });

module.exports = {
    Usuario,
    Perfil
}