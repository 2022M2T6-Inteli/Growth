// Requires
const express = require('express')
const Connection = require('./Connection')

// Routes
const builderRouter = require('./routes/BuilderRoutes')

const port = 3000;
const app = express()

Connection.setDatabase('./database.db');

app.use(express.json())


app.use(builderRouter)

app.get("/", (req, res) => {
    res.json("oi")
})

app.listen(port, async () => {
    console.log(`Server escutando a porta ${port} http://localhost:${port}`)
})