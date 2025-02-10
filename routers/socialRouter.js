const express = require("express");
const router = express.Router();
const socialController = require("../controllers/socialController");

// GET /usuarios
router.get("/usuarios", socialController.getUsuarios);
router.post("/usuarios", socialController.createUsuario);
router.get("/usuarios/:id", socialController.getUsuarioPorId);
router.delete("/usuarios/:id", socialController.deleteUsuario);

router.post("/perfiles", socialController.createPerfil);
router.get("/perfiles/:id", socialController.getPerfilesPorUsuario);
router.delete("/perfiles/:id", socialController.deletePerfil);
router.put("/perfiles/:id", socialController.updatePerfil);


module.exports = router;

