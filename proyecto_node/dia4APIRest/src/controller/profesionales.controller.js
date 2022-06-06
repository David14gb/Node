const {Professional} = require("../models/profesional")

let profe1 = new Professional("David", 26, "H", 65, 180)
let profe2 = new Professional("Sara", 27, "M", 60, 175)
let profe3 = new Professional("Maria", 26, "M", 55, 160)
let profe4 = new Professional("Patri", 27, "M", 55, 170)
let profe5 = new Professional("Susana", 30, "M", 60, 165)

let profesionales = [profe1, profe2, profe3, profe4, profe5];

function getStarts(request, response){

    let respuesta = {error: true, codigo:200, mensaje: 'Punto de inicio'}; 
    response.send(respuesta);
    next();
}

function getProfess(request, response){
    let respuesta;
    let id = request.query.id;
    if(profesionales != null && profesionales[id]){
        respuesta = profesionales[id]
    }else if(profesionales != null && !profesionales[id]){
        respuesta = profesionales
    }else{
        respuesta = {error:true, codigo:200, mensaje: "El usuario no existe"}
    }
    response.send(respuesta)

}

function postProfess(request, response){
    let respuesta; 
    if(profesionales != null){
        profesionales.push(new Professional(request.body.name, request.body.age, 
                                            request.body.genre, request.body.weight,
                                            request.body.height))
                                            respuesta = {error:false, codigo:200, mensaje:'Usuario añadido', resultado:profesionales};
   
    }else{
        respuesta = {error:false, codigo:200, mensaje:'El usuario no existe', resultado:profesionales}
    }
    response.send(respuesta)
}

function putProfess(request, response){
    let respuesta;
    let id = request.body.id;
    if(profesionales != null){
       
        profesionales[id].name = request.body.name;
        profesionales[id].age = request.body.age;
        profesionales[id].genre = request.body.genre;
        profesionales[id].weight = request.body.weight;
        profesionales[id].height = request.body.height;
        respuesta = {error:false, codigo:200, mensaje:'Usuario actualizado', resultado:profesionales};

    }else{respuesta = {error:false, codigo:200, mensaje:'El usuario no existe', resultado:profesionales}
    }
    response.send(respuesta)


}

function deleteProfess(request, response){
    let respuesta;
    if(profesionales != null){
      
        profesionales.splice(request.body.id,1)
        respuesta = {error:false, codigo:200, mensaje:'Usuario borrado', resultado:profesionales};
            
        
    }else{
        respuesta = {error:false, codigo:200, mensaje:'El usuario no existe', resultado:profesionales}
    }
    response.send(respuesta)
}





module.exports = {getStarts, getProfess, postProfess, putProfess, deleteProfess}