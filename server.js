const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="pl">
    
    <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="src/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.jsdelivr.net/npm/macy@2"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=IM+Fell+French+Canon&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
        <title>Kotki</title>
    </head>
    
    <body id="body">
        <button id="theme-button">MOTYW</button>
        <header>
            <script type="module" src="/src/header/header.js"></script>
        </header>
        <main>
            <script type="module" src="/src/main/main.js"></script>
        </main>
        <footer>
            <script type="module" src="/src/footer/footer.js"></script>
        </footer>
        <script type="" src="/src/javascripts/theme.js"></script>
        <script src="/src/javascripts/image.js"></script>
    </body>
    
    </html>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})