const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Meta Tags Example</title>
            
            <meta property="fc:frame" content="vNext">
            <meta property="fc:frame:image" content="C:/Users/1/farcaster.png">
            
            <meta property="fc:frame:button:1" content="Motivating Post">
            <meta property="fc:frame:button:1:action" content="link">
            <meta property="fc:frame:button:1:target" content="https://warpcast.com/wws1/0xc5b17952">

            <meta property="fc:frame:button:2" content="Image">
            <meta property="fc:frame:button:2:action" content="link">
            <meta property="fc:frame:button:2:target" content="https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/ff298244-e845-40db-4a1b-9a9d295ec500/original">

            <meta property="fc:frame:button:3" content="Frame Validator">
            <meta property="fc:frame:button:3:action" content="link>
            <meta property="fc:frame:button:3:target" content="https://warpcast.com/wws1">

        </head>
        <body>
            <h1>Welcome to the Meta Tags Example Page</h1>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
