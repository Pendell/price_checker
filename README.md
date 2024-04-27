# Welcome to my price checker using NodeJS!
This is a NodeJS application to check a stock price against google finances website. Uses the following NodeJS packages: express for general application-ing, path for path-ing, axios for web requesting, cheerio for scraping, and bodyParser for getting info from HTML bodies (like the index page)

# Running the application
To interact with the application, you must first start the server. To do so, from the top directory (the one that contains this README) run 'node src/index.js' (or node src\index.js for Windows users [note the direction of the backslash]).

There will be 'Server started on port 8080' or similar if everything started okay. 

When the server is running, navigate to http://localhost:8080 to enter the stock symbol, and market to search on. The application will scrape google finance's webpages checking for the last known price of the given symbol on the market.

Enjyoy, and thanks for stopping by <3  
Alex P.