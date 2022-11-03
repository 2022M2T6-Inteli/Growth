// Requires
const express = require('express')
const ConnectionService = require('./services/ConnectionService')

// Routes
const routes = require('./routes/routes');

const port = 3000;
const app = express()

// Define onde está o banco de dados que será usado
ConnectionService.setDatabase('./database.db');

app.use(express.json())

app.use(routes)

app.get("/", (req, res) => {
    res.json("oi")
})

app.listen(port, async () => {
    console.log(`Server escutando a porta ${port} http://localhost:${port}`)
})