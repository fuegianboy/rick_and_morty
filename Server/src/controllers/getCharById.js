const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

module.exports = (req, res) => {
  const {id} = req.params
  axios.get(URL+id)
  .then(response=> {
    const {status, name, species, origin, image, gender} = response.data
    const character = { id, status, name, species, origin, image, gender} = response.data
    return character.name
    ? res.status(200).json(character)
    : res.status(404).send("Not Found")
  })
  .catch(error =>{
    return res.status(500).send(error.message)
  })
}


// const axios = require("axios")

// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//   .then(response => {
//         const data = response.data 
//         const objeto = {
//             id: id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin.name,
//             image: data.image,
//             status: data.status
//         }
//         res.writeHead(200, { 'Content-Type':'application/json' })
//         res.end( JSON.stringify(objeto) );
//   })
//   .catch(error => {
// 	res.writeHead(500, { 'Content-Type':'text/plain' })
// 	res.end(error.message); // dentro de error, solo vemos el mensaje, chusmear con gepeto
//   });

// }



// module.exports = getCharById;