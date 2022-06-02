const {Router} = require ("express")
const router2 = Router();
const professCtrl = require("../controller/profesionales.controller")

router2.get("/d", professCtrl.getStarts);
router2.get("/profess", professCtrl.getProfess);
router2.post("/profess", professCtrl.postProfess);
router2.put("/profess", professCtrl.putProfess);
router2.delete("/profess", professCtrl.deleteProfess)

module.exports = router2; 