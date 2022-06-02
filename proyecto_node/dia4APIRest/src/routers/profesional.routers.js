const {Router} = require ("express")
const router = Router();
const profesCtrl = require("../controller/profesional.controller")

router.get("/", profesCtrl.getStart);
router.get("/profes", profesCtrl.getProfes);
router.post("/profes", profesCtrl.postProfes);
router.put("/profes", profesCtrl.putProfes);
router.delete("/profes", profesCtrl.deleteProfes)
// router.post("/post/:id", profesCtrl.get)



module.exports = router; 