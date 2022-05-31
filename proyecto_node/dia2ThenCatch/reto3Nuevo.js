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

let person = {}

async function leer(obj){
    try {
        
        await pregunta("Name: "), obj.name;
        obj.surname = pregunta(surname);
        obj.age = pregunta(age);
    
    
        await fs.writeFile('NuevaPerson.json', JSON.stringify(obj))
        let nuevo = await fs.readFile('NuevaPerson.json', 'utf8')
        console.log(JSON.parse(nuevo));

    } catch(error){
        console.log(error);
    }

}

leer(person)