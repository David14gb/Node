const fs = require('fs')

let person = {
    "name": "David",
    "surname": "García",
    "age": "26"
}
function leer (objetoPersona){


fs.writeFile("person.json", JSON.stringify(objetoPersona), function(){
    fs.readFile("person.json", 'utf-8', (err, objetoPersona)=>{
        if(err){
            console.log('error: ', err);
        } else{
            let objeto = JSON.parse(objetoPersona)
            console.log(objeto);
        }
        
    })
})

}
leer(person);