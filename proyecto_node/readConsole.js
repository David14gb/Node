const { Agent } = require('http');
const readline = require('readline');
let persona = {}
let rl = readline.createInterface(process.stdin, process.stdout);

function readConsole(callback){
       
    rl.question("Name: ", (respuesta)=> {
        persona.name = respuesta
        rl.question("Surname: ", (respuesta)=>{
            persona.surname = respuesta
            rl.question("Age: ", (respuesta)=>{
                persona.age = respuesta
                callback(persona);
            })
        })
    });
}


module.exports = {readConsole};