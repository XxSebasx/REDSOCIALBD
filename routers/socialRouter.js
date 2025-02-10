const express = require("express");
const router = express.Router();
const socialController = require("../controllers/socialController");


router.get("/usuarios", socialController.getUsuarios);
router.post("/usuarios", socialController.createUsuario);
router.get("/usuarios/:id", socialController.getUsuarioPorId);
router.delete("/usuarios/:id", socialController.deleteUsuario);

router.get("/perfiles", socialController.getPerfiles);
router.post("/perfiles", socialController.createPerfil);
router.get("/perfiles/:id", socialController.getPerfilesPorUsuario);
router.delete("/perfiles/:id", socialController.deletePerfil);
router.post("/perfiles/:id", socialController.asignarPerfil);
router.put("/perfiles/:id", socialController.updatePerfil);

router.get("/usuariosconperfiles", socialController.getUsuariosConPerfil);
router.get("/usuariosSinPerfil", socialController.getUsuariosSinPerfil);


module.exports = router;

