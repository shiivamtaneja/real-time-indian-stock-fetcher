const StockSchema = require("../models/stock");
const { StatusCodes } = require('http-status-codes');

const getSymbol = async (req, res) => {
  const { symbol } = req.params;

  try {
    const data = await StockSchema.find({ symbol }).sort({ timestamp: -1 }).limit(20)

    return res.status(StatusCodes.OK).json({ data });
  } catch (err) {
    console.log("Error: ", err);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ data: "Internal Server Error" });
  }
};

module.exports = {
  getSymbol,
}