const http = require('http');

const server = http.createServer(function(request, response){
    console.log('Petición recibida por consola');
    console.log('Request url:' + request.url);
    console.log('Request method: ' + request.method);
    console.log(request.headers['content-type'], request.headers['content-length'], request.headers['user-agent']);
    response.writeHead(200,{'Content-type':'application/json'});
    if(request.url == "/bye"){
        let obje = {
            ok:true,
            message:'Adios!'
        }
        response.write(JSON.stringify(obje))
    }else{
        let objeto = {
            ok:true,
            message:'Recibido'
        }
        response.write(JSON.stringify(objeto))
    }
    response.end()
   
})

server.listen(3000);