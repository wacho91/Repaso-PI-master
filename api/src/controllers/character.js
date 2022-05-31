const axios = require("axios");
const {Characters, Episode } = require("../db")

const characterApi = async () => {
    try{ 
    const personajes = await axios.get("https://rickandmortyapi.com/api/character")
    const person = await personajes.data.results.map(el => {
        return{
            id: el.id,
            name: el.name,
            origen: el.origin.name,
            image: el.image,
            episode: el.episode
        }
    })

    return person
  }catch(error){error.console.log(error)}
}

const characterDB = async () =>{
    try{ 
   const personDB = await Characters.findAll({
      include:[{
          model: Episode,
          attribute: ['name']
      }]
   })
   return personDB
}catch(error){console.log(error)}
  
}

const characterAll = async () =>{
    const character = await characterApi()
    const charaterdb = await characterDB()
    const characterTotal = [...character, charaterdb]
    return characterTotal
}

module.exports = {characterAll};