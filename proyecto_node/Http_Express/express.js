const express = require ('express');
const app = express()

app.get('/', function(req, res){
    console.log('Petición recibida del cliente');
    console.log('Request url:' + req.url);
    console.log('Request method: ' + req.method);
    console.log(req.headers['user-agent']);
    let objeto = {
        ok:true,
        message:'Recibido!'
    }
    res.json(objeto)

})
app.get('/bye', function(req, res){
    let obje = {
        ok:true,
        message:'Adios!'
    }
    res.json(obje)

})

app.listen(4000)