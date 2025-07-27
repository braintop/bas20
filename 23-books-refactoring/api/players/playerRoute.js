const express = require('express')
var router = express.Router();
var controller = require('./playersController')

router.get("/", controller.get)
router.post("/", controller.create)
router.get("/:id", controller.getById)
router.delete("/:id", controller.delete)
router.put("/:id", controller.update)
module.exports = router;