const fs = require('fs/promises')
const readline = require("readline")
function pregunta(pregunta){
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question
}

let person = {
    "name": "David",
    "surname": "García",
    "age": "26"
}

function leer(objeto){
    fs.writeFile('persona.json', JSON.stringify(objeto))
    .then( () => {
        return fs.readFile('persona.json', 'utf8')
    })
    .then(obje => {
        console.log(JSON.parse(obje));
    })
    .catch(err => {
        console.log(err);
    })
}

leer(person);

//async

async function leo(obj){

    try {
        await fs.writeFile('otraPerson.json', JSON.stringify(obj))
        let nuevo = await fs.readFile('otraPerson.json', 'utf8')
        console.log(JSON.parse(nuevo));
    } catch(error){
        console.log(error);
    }
}
let objeto = {
    "name": "David",
    "surname": "García",
    "age": "26"
}
leo(objeto);