const express = require("express")
const cors = require ('cors')
const professRouters = require("../src/routers/profesionales.routers")
const errorHandling = require("./error/errorHandling")

const apps = express();

apps.set("port", 4000)

apps.use(cors());
apps.use(express.urlencoded({extended:false}));
apps.use(express.json());
apps.use(professRouters);
apps.use(function(req, res, next)
    {
        res.status(404).json({error:true,
                              codigo:404,
                              message:"Endpoint doesnt found"})
    })

    apps.use(errorHandling);
    
    module.exports = apps