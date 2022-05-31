const fs = require('fs/promises')

function writeAndRead(objeto){
    fs.writeFile('personaCreada.json', JSON.stringify(objeto))
    .then( () => {
        return fs.readFile('personaCreada.json', 'utf8')
    })
    .then(obje => {
        console.log(JSON.parse(obje));
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = {writeAndRead};