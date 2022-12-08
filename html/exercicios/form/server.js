const express = require('express')
const app = express()

app.use(express.urlencoded())

app.post('/usuarios', (req, resp) => {
    console.log(req.body);
    resp.send('<h1>Parabéns</h1>');
})

app.listen(8080)
