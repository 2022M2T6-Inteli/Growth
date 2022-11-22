// Requires
const express = require('express')
const ConnectionService = require('./services/ConnectionService')

// Routes
const routes = require('./routes/Routes');

const port = 3000;
const app = express()

// Define onde está o banco de dados que será usado
ConnectionService.setDatabase(__dirname + '/database.db');
app.set('view engine', 'ejs')
app.use(express.json())
app.use('/frontend', express.static(__dirname + '/../Frontend'))
app.use('/imagens', express.static(__dirname + '/../../imagens'))

app.use(routes)

app.listen(port, async () => {
    console.log(`Server escutando a porta ${port} http://localhost:${port}`)
})