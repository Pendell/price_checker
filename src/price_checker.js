const cheerio = require('cheerio');
const axios = require('axios');

// TSLA stock price
const stock_url = "https://www.google.com/finance/quote/TSLA:NASDAQ";

async function getPrice(url) {
    try {
        console.log("Trying to get price...");
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const $price = $('div[data-last-price]').attr('data-last-price');
        console.log("$"+$price);
    } catch (error) {
        console.error(error);
    }
}

getPrice(stock_url);