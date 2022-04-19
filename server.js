const express = require('express')
const app = express()
const port = process.env.PORT || 5000

let emojis = ['🧨', '🎲', '🔱', '🔑', '🧵', '🐈', '🏴‍☠️', '🥙']
let number = 1

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
    console.log(`${emojis[Math.floor(Math.random()*emojis.length)]} Działa! - ${number++}`)
})

app.use('/public', express.static('public/'));


app.listen(port, () => {
    console.log(`🌐 - ${port}\n`)
})