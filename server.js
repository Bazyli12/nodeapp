const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
    console.log('dziala')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})