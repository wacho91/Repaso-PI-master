const { Router } = require('express');
const { Episode } = require('../db');
const { episodios } = require('../controllers/episode');
const router = Router();

router.get('/episodes', async(req, res) => {
    res.status(200).send(await episodios());
})

module.exports = router;