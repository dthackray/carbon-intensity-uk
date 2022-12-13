const express = require("express")

const PORT = process.env.PORT || 3001

const app = express()
const cors = require("cors")

app.use(cors())

const request = import('node-fetch');

app.get("/", (req, res) => {
    res.json({ message: "Hello World!" })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})