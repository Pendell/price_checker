// General application stuff...
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// HTML scraping
const cheerio = require('cheerio');
const axios = require('axios');

const app = express();

async function getPrice(url) {
    try {
        console.log(`Trying to grab price from ${url}...`);
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const $price = $('div[data-last-price]').attr('data-last-price');
        console.log("...price is $"+$price);
        return $price;
    } catch (error) {
        console.error(error);
    }
}

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    const indexPath = path.resolve(__dirname, 'index.html');
    res.sendFile(indexPath);
});

app.post('/price_check', (req, res) => {
    const symbol = req.body.symbol;
    const market = req.body.market;

    const url = `https://www.google.com/finance/quote/${symbol}:${market}`;
    (async () => {
        res.send(`${symbol}:${market} = $`+ await getPrice(url));
    })();
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});