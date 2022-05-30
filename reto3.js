const readline = require('readline');
const fs = require('fs');

let persona = {}
let rl = readline.createInterface(process.stdin, process.stdout);

function objeto(objetoPersona){
    
    rl.question("Name: ", (respuesta)=> {
        objetoPersona.name = respuesta
        rl.question("Surname: ", (respuesta)=>{
            objetoPersona.surname = respuesta
            rl.question("Age: ", (respuesta)=>{
                objetoPersona.age = respuesta
                fs.writeFile("personObjeto.json", JSON.stringify(objetoPersona), function(){
                    fs.readFile("personObjeto.json", (err, leerPersona)=>{
                        if(err){
                            console.log('error: ', err);
                        } else{
                            let objeto = JSON.parse(leerPersona)
                            console.log(objeto);
                            process.exit();
                        }
                        
                    })
                })
                
            })
        })
    });
}
objeto(persona);

