const readline = require("readline");
const fs = require('fs/promises')

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


function readConsole(){
   const pro1 = new Promise((resolve, reject) => {
        let obj = {}
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
            resolve(obj)
        })    
        .catch(err => {
            reject(err);
        })
        });
    return pro1
}





// Async

let person = {}

    
async function readConsole1(){
    try {
        
        person.name = await pregunta("Name: ");
        person.surname = await pregunta("Surname: ");
        person.age = await pregunta("Age: ");
    
    } catch(error){
        console.log(error);
    }
    return person
}



module.exports = {readConsole, readConsole1};