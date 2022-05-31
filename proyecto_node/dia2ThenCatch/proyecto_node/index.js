let write = require('./writeAndReadObject.js')
let read = require('./readConsole.js')


read.readConsole()
    .then((persona) =>  {
        write.writeAndRead('personW.json', persona)
    }).catch((err) =>{
        console.log(err);
    })
    // write.writeAndRead('personW.json', personB)


// Async
async function readMe(){
    let obj = await read.readConsole1()
    await write.writeAndRead1('personWAsync.json', obj)

}

readMe()
