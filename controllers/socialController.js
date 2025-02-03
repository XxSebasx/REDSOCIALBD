const Usuario = require("../models/Usuario");
const Perfil = require("../models/Perfil");

module.exports = {
    async getUsuarios(req,res){
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    },

    
    async getUsuarioPorId(req,res){
        const usuario = await Usuario.findByPk(req.params.id, {include: [{model: Perfil, where: {ID: req.params.id}}]});
        if(!usuario){
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        res.json(usuario);
    },

    async createUsuario(req,res){
        const {nombre, email, password} = req.body;
        const usuario = await Usuario.create({nombre, email, password});
        res.json(usuario);
    },

    async deleteUsuario(req,res){
        const usuario = await Usuario.findByPk(req.params.id);
        if(!usuario){
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        await usuario.destroy();
        res.json({message: 'Usuario eliminado'});
    },

    async getperfil(req,res){
        const perfil = await Perfil.findByPk(req.params.id,{include: [{model: Usuario, where:{ID: req.params.id}}]})
        if(!perfil){
            return res.status(404).json({message: 'Perfil no encontrados'});
        }
        res.json(perfil);
    },

    async getPerfilesPorUsuario(req,res){
        const perfiles = await Perfil.findAll({include: [{model: Usuario, where:{ID: req.params.id}}]})
        if(!perfiles){
            return res.status(404).json({message: 'Perfiles no encontrados'});
        }
        res.json(perfiles);
    },

    async createPerfil(req,res){
        const {direccion, telefono, fecha, fotoPerfil} = req.body;
        const perfil = await Perfil.create({direccion, telefono, fecha, fotoPerfil});
        res.json(perfil);
    },

    async updatePerfil(req,res){
        const {direccion, telefono, fecha, fotoPerfil} = req.body;
        const perfil = await Perfil.findByPk(req.params.id);
        if(!perfil){
            return res.status(404).json({message: 'Perfil no encontrado'});
        }
        await perfil.update({direccion, telefono, fecha, fotoPerfil});
        res.json(perfil);
    }

}