const axios = require('axios');
const { Episode } = require('../db');

const episodios = async () => {
    let info = await axios.get('https://rickandmortyapi.com/api/episode');
    let epi = await info.data.results.map(e => {
        return {
            id: e.id,
            name: e.name
        }
    })

    Episode.bulkCreate(epi)
    return epi
}

module.exports = { episodios }