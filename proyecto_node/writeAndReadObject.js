const fs = require('fs');
function writeAndRead(path, obj){
    
    fs.writeFile(path, JSON.stringify(obj), function(){
        fs.readFile(path, (err, obj)=>{
            if(err){
                console.log('error: ', err);
            } else{
                let objeto = JSON.parse(obj)
                console.log(objeto);
                process.exit();
            }
            
        })
    })
}

// let person = {
//     "name": "David",
//     "surname": "García",
//     "age": "26"
// }
// writeAndRead('hola.json', person)


module.exports = {writeAndRead};