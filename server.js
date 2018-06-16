var cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())
const cartas = require('./cards.json')
app.get('/', (req, res) => res.send("<h1>Olá Mundo</h1>"))

app.get('/api/status', (req, res) => res.send({ status: "Online" }))

app.get('/api/cards', (req, res) => res.send(cartas))

app.get('/api/cards/:id', function (req, res) {
    for (var x of cartas.cards) {
        if (x.id == req.params.id) { 
            return res.send(x)
        }
    }
    res.sendStatus(404)
    // res.send("")
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))