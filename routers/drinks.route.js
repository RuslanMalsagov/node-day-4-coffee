const { Router } = require("express");
const { drinkController } = require("../controllers/drinks.controller");

const router = Router();

router.get("/drinks", drinkController.getDrink);
router.get("/drinks/in-stock", drinkController.getDrinkInStock);
router.get("/drinks/:id", drinkController.getDrinkId);
router.post("/drinks", drinkController.postDrink);
router.delete("/drinks/:id", drinkController.deleteDrink);
router.patch("/drinks/:id", drinkController.patchDrink);

module.exports = router;
