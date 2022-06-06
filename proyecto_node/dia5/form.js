async function getProfes(){
    let id = document.getElementById("id").value;
    let url;
    if(id != null){
        url = `http://localhost:3000/profesional?id=${id}`
    }else{
        url = `http://localhost:3000/profesional`
    }
    param = {
                headers:{
                    "content-type": "application/json; charset=UTF-8"
                },
                method: "GET"
    }
    try{
        let data = await fetch(url, param)
        let result = await data.json();
        // Prueba
        // if(result[id] == null){
        // result.splice(result[id], 1)
        // }
        // result = result.filter((valor) => {
        //     return valor != null
        //     })
        console.log(result);
        // Prueba
        if(result.length > 0){
            // Prueba
            result = result.filter((valor) => {
                return valor != null
                })
            // Prueba
            imp= "";
            for(let i = 0; i<result.length; i++){
                imp += ` <div class="card mt-5" style="width: 18rem;">
                <div class="card-body">
                        <h5 class="card-title">Nombre: ${result[i].name}</h5>
                        <p class="card-text">Edad: ${result[i].age}</p>
                        <p class="card-text">Género: ${result[i].genre}</p>
                        <p class="card-text">Altura: ${result[i].height}</p>
                        <p class="card-text">Peso: ${result[i].weight}</p>
                    </div>
                </div>
                <div class="col-1"></div>`
                
            }
            document.getElementById("todos").innerHTML = imp;
        }else{
            imp = ` <div class="card mt-5" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Nombre: ${result.name}</h5>
                            <p class="card-text">Edad: ${result.age}</p>
                            <p class="card-text">Género: ${result.genre}</p>
                            <p class="card-text">Altura: ${result.height}</p>
                            <p class="card-text">Peso: ${result.weight}</p>
                        </div>
                    </div>
                    <div class="col-1"></div>`
            document.getElementById("todos").innerHTML = imp
        }
    }catch(e){           
        console.log(e);
    }
}

async function postProfes(){

    try{

    let user = new Professional(document.getElementById("name").value, 
                                document.getElementById("age").value, 
                                document.getElementById("genre").value, 
                                document.getElementById("weight").value, 
                                document.getElementById("height").value, 
                                document.getElementById("id").value)

    let url = "http://localhost:3000/profesional";
    let param = {
        headers:{"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(user),
        method: "POST"
    }
    let data = await fetch(url, param);
    let result = await data.json();

    console.log(result);

    }catch(error){
        console.log(error);
    }
}

async function putProfes(){
    let id = document.getElementById("id").value;
    let nombre = document.getElementById("name").value;
    let edad = document.getElementById("age").value; 
    let genero = document.getElementById("genre").value;
    let peso = document.getElementById("weight").value; 
    let altura = document.getElementById("height").value; 
    let json ={ "name" : nombre,
                "age" : edad,
                "genre" : genero, 
                "weight" : peso,
                "height" : altura,
                "id" : id}
    // Url para cambiar
    let url = "http://localhost:3000/profesional";
    let param = {
        headers:{"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(json),
        method: "PUT"
    }
    let data = await fetch(url, param);
    console.log(data);
    let result = await data.json();
    console.log(result);
    

    // if(id != null){
            
    //     if(nombre != ""){
    //         result[id].name = nombre;
    //     }else if(edad != ""){
    //         result[id].age = edad;
    //     }else if(genero != ""){
    //         result[id].genre = genero;

    //     }else if(peso != ""){
    //         result[id].weight = peso;

    //     }else if(altura != ""){
    //         result[id].height = altura;
                       
    //     }
    //     console.log(result[id]);
        
    // }else{
    //     console.log("No hay ID");
    // }
    
}



async function deleteProfes(){
    let id = document.getElementById("id").value;
    try{
        let url = "http://localhost:3000/profesional";
        let json ={ 
                    "id" : id}
        let param = {
            headers:{"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(json), 
            method: "DELETE"
        }
    
        let data = await fetch(url, param);
        let result = await data.json();
        console.log(result);
        if(result.resultado.length > id){
            result.resultado.splice(id, 1);
            resultado = result.resultado.filter((valor) => {
                return valor != null
                })

                //     return valor != undefined
            // for(let i = 0; i < result.length; i++){
                // if(id == i){
                // result.splice(i, 1)
                // result = result.filter((valor) => {
                //     return valor != undefined
                // })
                // }
            // }

            console.log(result);
        }
    }catch(error){
        console.log(error);  
    }
    
}
