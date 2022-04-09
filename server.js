const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000

app.use('/src', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
    console.log('dziala')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})