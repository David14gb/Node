const fs = require('fs/promises')
const readline = require("readline")
let person = {}
function pregunta(pregunta){
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Nombre: ', (name) => {
            person.name = name
            resolve(name)
            rl.question('Surname: ', (surname) => {
                person.surname = surname
                resolve(surname)
                rl.question('Age: ', (age) =>{
                    person.age = age
                    resolve(age)
                    rl.close()
                    fs.writeFile('personaNueva.json', JSON.stringify(pregunta))
                    .then( () => {
                        return fs.readFile('personaNueva.json', 'utf8')
                    })
                    .then(obje => {
                        console.log(JSON.parse(obje));
                    })
                    .catch(err => {
                        console.log(err);
                    })
                })
            })
            
            
        });
    });
    return question
}

pregunta(person)