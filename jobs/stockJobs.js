const cron = require('node-cron');

const StockSchema = require('../models/stock');

const scrapeSymbol = require('../utils/scrapeSymbol');

const fetchData = async () => {
  const symbols = ["TCS", "INFY", "RELIANCE", "HDFCBANK", "ITC"]

  for (const symbol of symbols) {
    try {
      console.log(`Fetching data for symbol ${symbol} [${new Date().toLocaleString()}]`)

      const price = await scrapeSymbol(symbol);

      const newData = new StockSchema({ symbol, price });

      await newData.save();
    } catch (err) {
      console.error(`Error fetching data for ${symbol}:`, err);
    }
  }
}

// const job = cron.schedule('*/5 * * * * *', fetchData);

module.exports = {
  fetchData
}