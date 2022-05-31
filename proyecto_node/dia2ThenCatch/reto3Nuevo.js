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

//Async

let person = {}

async function leer(obj){
    try {
        
        obj.name = await pregunta("Name: ");
        obj.surname = await pregunta("Surname: ");
        obj.age = await pregunta("Age: ");
    
    
        await fs.writeFile('NuevaPerson.json', JSON.stringify(obj))
        let nuevo = await fs.readFile('NuevaPerson.json', 'utf8')
        console.log(JSON.parse(nuevo));

    } catch(error){
        console.log(error);
    }

}

// leer(person)

// Then y Catch

let personaNueva = {}

function leo(obj){

    pregunta("Name: ")
    .then((respuesta) => {
        obj.name = respuesta 
        return pregunta("Apellido: ")
    })
    .then((respuesta) => {
        obj.surname = respuesta
        return pregunta("Age: ")
    })
    .then((respuesta) => {
        obj.age = respuesta
        return fs.writeFile('personaN.json', JSON.stringify(obj))
    })    
    .then( () => {
        return fs.readFile('personaN.json', 'utf8')
    })
    .then(obje => {
        console.log(JSON.parse(obje));
    })
    .catch(err => {
        console.log(err);
    })

}

leo(personaNueva)
