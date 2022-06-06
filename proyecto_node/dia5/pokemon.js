let url = `https://pokeapi.co/api/v2/pokemon/`
// let pokemon = document.getElementById('pokemonName').value.toLowerCase()
// let boton = document.getElementById('buscarPokemon')
// let appNode = document.getElementById('app')



function insertPokemon(){
    let pokemon = document.getElementById('pokemonName').value.toLowerCase()
    // Window para hacer una petición a una página web
    window.fetch(`${url}${pokemon}`)
    .then(response => {
        if(response.status === 404){
            alert('Este pokemon no existe')
        }else{
            return response.json()
        }
    }).then(responseJSON => {

        let result = []

        // For in por ser un objeto json y meterlos en un array para poder recorrerlo
        // result.push([información , json[información]])
        // para luego poder utilizar los result[0][1] y poder tratarlo como array

        for(let pokemonInfo in responseJSON){
            result.push([pokemonInfo, responseJSON[pokemonInfo]])
        }
        console.log("-------------");
        console.log(result);
        // Nombre
        document.getElementById('nombre__pokemon').innerHTML = `<div>Nombre: ${result[10][1]}</div>`
        // ID
        document.getElementById('id__pokemon').innerHTML = `<div>ID: ${result[6][1]}</div>`
        // Imagen
        document.getElementById('pokemon__imagen').innerHTML = `<img class="imagen__pokemon" src="${result[14][1].other.home.front_default}"alt="Imagen Pokemon"></img>`
        // Habilidad
        document.getElementById('habilidad__pokemon').innerHTML = `<div>Primera Habilidad: ${result[0][1][0].ability.name}</div>`
        document.getElementById('habilidad__pokemon2').innerHTML = `<div>Segunda Habilidad: ${result[0][1][1].ability.name}</div>`
        document.getElementById('tipo__pokemon').innerHTML = `<div>Pokemon tipo: ${result[16][1][0].type.name}</div>`
        console.log("-------------");
        console.log(result);
        
    })
    console.log("Hola, estoy funcionando")
}

// console.table(result);
        // let pokemonImage = document.createElement('img')
        // pokemonImage.result.src = result[14][1].front_default
        // let pokemonName = document.createElement('h2')
        // pokemonName.innerText = `Name: ${result[10][1]}
        //                         ID: ${result[6][1]}`
        
        // console.log("-------------");
        // console.log(pokemonName);

        // let contenedor = document.createElement('div')
        // contenedor.append(pokemonName)
        // informacion.push(contenedor)
        // console.log("-------------");
        // console.log(contenedor);
        // console.log("-------------");
        // console.log(informacion);


// Otra Forma

// const fetchData = async (name) => {
//     try{
//         let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
//         let data = await res.json()
//         console.log(data + "----------1");
        
//         const pokemon = {
//             "img": data.sprites.other.dream_world.front_default,
//             "name": data.name

//         }
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// Pokedex https://www.youtube.com/watch?v=i8Zfq87HoGg&ab_channel=Programaci%C3%B3nAccesible
// Batalla https://www.youtube.com/watch?v=m-52KaeVNCY&ab_channel=WaspSoluciones

// const pintarCard = (pokemon) => {
//     console.log(pokemon);
//     const lugar = document.getElementById('todos').content
//     const flex = document.querySelector('.flex')
    
// }

//  Forma de hacerlo

// let pokemonCard = document.getElementById('pokemon__card');
// let pokemonTitulo = document.getElementById('titulo');
// let pokemonImagen = document.getElementById('pokemon__imagen--api');
// let pokemonImagenPadre = document.getElementById('pokemon__imagen');
// let pokemonId = document.getElementById('pokemon__id');
// let pokemonTypes = document.getElementById('pokemon__types');
// let pokemonStats = document.getElementById('pokemon__stats');

// async function consultarPokemon() {
//     let name = document.getElementById("nombrePokemon").value.toLowerCase();

//     try{
//         let url= `https://pokeapi.co/api/v2/pokemon/${name}`
//         let pokemon = {
//             "img": data.sprites.other.dream_world.front_default,
//             // "name": data.forms[0].name,
//             "ability": data.stats
//         }
//         let result = await fetch(url, pokemon)
//         let data = await result.json()
        
//         console.log(data + "----------1");
        
      


//     }catch(error){
//         console.log(error);
//     }
// }