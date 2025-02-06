const express = require("express");
const router = express.Router();
const socialController = require("../controllers/socialController");

// GET /usuarios
router.get("/usuarios", socialController.getUsuarios);
router.post("/usuarios", socialController.createUsuario);
router.get("/usuarios/:id", socialController.getUsuarioPorId);
router.delete("/usuarios/:id", socialController.deleteUsuario);








module.exports = router;

