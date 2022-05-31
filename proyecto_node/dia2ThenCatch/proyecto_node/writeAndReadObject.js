const { rejects } = require('assert');
const fs = require('fs/promises')




function writeAndRead(path, objeto){

    fs.writeFile(path, JSON.stringify(objeto))
    .then( () => {
        return fs.readFile(path, 'utf8')
    })
    .then(obje => {
        console.log(JSON.parse(obje));
    })
    .catch(err => {
        console.log(err);
    })
}


//Async

async function writeAndRead1(path, obj){

    try {
        await fs.writeFile(path, JSON.stringify(obj))
        let nuevo = await fs.readFile(path, 'utf8')
        console.log(JSON.parse(nuevo));
    } catch(error){
        console.log(error);
    }
}


module.exports = {writeAndRead, writeAndRead1};