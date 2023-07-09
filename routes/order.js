const express = require("express");
const router = express.Router();

const {create} = require("../controllers/order");

router.post("/order", create);

module.exports = router;