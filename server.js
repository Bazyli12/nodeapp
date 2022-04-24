const express = require('express')
const fs = require('fs')
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

//FUNKCJA OD PUBLIKOWANIA STRON Z FOLDERU
function site(name) {
    app.get(`/${name}`, (req, res) => {
        console.log(`accessing to ... ${name}`)
        res.sendFile(`./sites/${name}/index.html`, { root: __dirname })
    })
}

//POBIERANIE KAZDEGO FOLDERU Z FOLDERU
const sites = function getDirectories(path) {
    return fs.readdirSync(path).filter(function(file) {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}

console.log('all sites: ')
console.table(sites)

//PUBLIKOWANIE KAZDEJ STRONY
sites.forEach(element => {
    console.log(element)
    site(element)
});