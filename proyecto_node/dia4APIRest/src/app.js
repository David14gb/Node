const express = require("express")
const cors = require('cors')
const profesRouters = require("./routers/profesional.routers")
// const professRouters = require("../src/routers/profesionales.routers")
const errorHandling = require("./error/errorHandling")

const app = express(); 

app.set("port", 3000)

app.use(cors());
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());
app.use(profesRouters);
// app.use(professRouters);
app.use(function(req, res, next)
    {
        res.status(404).json({error:true, 
                            codido: 404, 
                            message: "Endpoint doesnt found"})
    })

app.use(errorHandling);

module.exports = app;