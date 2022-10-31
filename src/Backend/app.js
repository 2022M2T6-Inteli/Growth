// Modules
const express = require('express')
const sqlite = require('sqlite3').verbose()

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json("oi")
})