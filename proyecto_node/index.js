let write = require('./writeAndReadObject.js')
let read = require('./readConsole.js')


read.readConsole(function(objet){
    write.writeAndRead('escrito.json', objet)
});