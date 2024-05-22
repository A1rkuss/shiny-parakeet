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
            
            <!-- Standard Meta Tags -->
            <meta name="description" content="This is an example page with various meta tags for SEO and social media.">
            <meta name="keywords" content="meta tags, SEO, Open Graph, Twitter Cards">
            <meta name="author" content="Your Name">
            
            <!-- Open Graph Meta Tags -->
            <meta property="og:title" content="Example Title">
            <meta property="og:description" content="Example description">
            <meta property="og:image" content="/images/example.jpg">
            <meta property="og:url" content="http://example.com">
            <meta property="og:type" content="website">
            
            <!-- Twitter Card Meta Tags -->
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="Example Title">
            <meta name="twitter:description" content="Example description">
            <meta name="twitter:image" content="/images/example.jpg">
            <meta name="twitter:site" content="@your_twitter_handle">
            <meta name="twitter:creator" content="@your_twitter_handle">
            
            <!-- Custom Meta Tags for fc:frame -->
            <meta property="fc:frame" content="Example Frame Content">
            <meta property="fc:frame:image" content="/images/example_frame.jpg">
            
            <!-- Custom Meta Tags for Buttons -->
            <meta property="fc:frame:button:1" content="Button 1 Text">
            <meta property="fc:frame:button:1:action" content="Button 1 Action">
            <meta property="fc:frame:button:1:target" content="http://example.com/button1">

            <meta property="fc:frame:button:2" content="Button 2 Text">
            <meta property="fc:frame:button:2:action" content="Button 2 Action">
            <meta property="fc:frame:button:2:target" content="http://example.com/button2">

            <meta property="fc:frame:button:3" content="Button 3 Text">
            <meta property="fc:frame:button:3:action" content="Button 3 Action">
            <meta property="fc:frame:button:3:target" content="http://example.com/button3">

            <meta property="fc:frame:button:4" content="Button 4 Text">
            <meta property="fc:frame:button:4:action" content="Button 4 Action">
            <meta property="fc:frame:button:4:target" content="http://example.com/button4">

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
