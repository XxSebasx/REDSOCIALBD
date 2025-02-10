const Perfil = require('./Perfil');
const Usuario = require('./Usuario');
Usuario.hasMany(Perfil, { foreignKey: 'usuarioID' });
Perfil.belongsTo(Usuario, { foreignKey: 'usuarioID' });

module.exports = {
    Usuario,
    Perfil
}