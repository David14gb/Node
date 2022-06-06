const {Professional} = require("../models/profesional")


let profes = null;

function getStart(request, response){
    
    let respuesta = {error: true, codigo:200, mensaje: 'Punto de inicio'}; 
    response.send(respuesta);
    next();
}

function getProfes(request, response){

    let respuesta; 
    if(profes != null)
        respuesta = profes;
    else
        respuesta = {error:true, codigo:200, mensaje: "El usuario no existe"}

    response.send(respuesta)
}

function postProfes(request, response){
    // let nuevo = new Professional("david", 9, "hola", 180, 67)
    let respuesta; 
    if(profes === null){
        profes = new Professional(request.body.name, 
                                 request.body.age, request.body.genre, 
                                 request.body.weight, request.body.height)

        respuesta = {error: false, codigo : 200, mensaje: 'Usuario Creado', resutado:profes}
    }
    else{
        respuesta = {error: true, codigo:200, mensaje: 'Usuario ya existe', resultado: null}
    }
    
    response.send(respuesta);
}

function putProfes(request, response){
    let respuesta;
    if(profes != null){
        profes.name = request.body.name;
        profes.age = request.body.age;
        profes.genre = request.body.genre;
        profes.weight = request.body.weight;
        profes.height = request.body.height;
        respuesta = {error:false, codigo:200, mensaje:'Usuario actualizado', resultado:profes};
    }
    else{
        respuesta = {error:false, codigo:200, mensaje:'El usuario no existe', resultado:profes}
    }
    response.send(respuesta)
}

function deleteProfes(resquest, response){
    let respuesta;
    if(profes != null){
        profes = null;
        respuesta = {error:false, codigo:200, mensaje:'Usuario borrado', resultado:profes};
    }else{
        respuesta = {error:false, codigo:200, mensaje:'El usuario no existe', resultado:profes}
    }
    response.send(respuesta)
}

module.exports = {getStart, getProfes, postProfes, putProfes, deleteProfes}