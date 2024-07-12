const axios = require('axios');
const cheerio = require('cheerio');

const scrapeSymbol = async (symbol) => {
  try {
    const response = await axios.get(`https://www.google.com/finance/quote/${symbol}:NSE`);

    const html = response.data;
    const $ = cheerio.load(html);
    const price = parseFloat($('div.YMlKec.fxKbKc').text().trim().replace("₹", "").replace(",", ""));

    return price;
  } catch (err) {
    console.log("Error fetching stock data: ", err);
  }
};

module.exports = scrapeSymbol