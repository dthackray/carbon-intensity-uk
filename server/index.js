const express = require("express")

const PORT = process.env.PORT || 3001

const app = express()

const request = import('node-fetch');
 
const url = "https://api.carbonintensity.org.uk/intensity"
const headers = {
    'Accept':'application/json'
};
 
fetch(url,
    {
        method: "GET",
        headers: headers
    })
    .then((res) => {
        return res.json()
    })
    .then((body) => {
        console.log(body)
    }
)

app.get("/", (req, res) => {
    res.json({ message: "Hello World!" })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})