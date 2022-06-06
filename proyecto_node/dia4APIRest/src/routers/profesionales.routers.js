const {Router} = require ("express")
const router2 = Router();
const professCtrl = require("../controller/profesionales.controller")

router2.get("/", professCtrl.getStarts);
router2.get("/profesional", professCtrl.getProfess);
router2.post("/profesional", professCtrl.postProfess);
router2.put("/profesional", professCtrl.putProfess);
router2.delete("/profesional", professCtrl.deleteProfess)

module.exports = router2; 