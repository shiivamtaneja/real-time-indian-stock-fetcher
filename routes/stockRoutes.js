const express = require("express");
const { getSymbol } = require("../controller/stockController");
const { fetchData } = require("../jobs/stockJobs");

const router = express.Router()

router.get("/save", fetchData);

router.get('/:symbol', getSymbol);

module.exports = router;