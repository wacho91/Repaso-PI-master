const { Router } = require("express");
const characters = require('./characters');
const episodes = require('./episode');

const router = Router();

// Configurar los routers
router.use('/', characters);
router.use('/', episodes);


module.exports = router;
