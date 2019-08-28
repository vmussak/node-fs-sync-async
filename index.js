const fs = require('fs');
const express = require('express'),
    app = express()

app.get('/sync', (req, res) => {
    let arquivo = fs.readFileSync("C:\\Users\\Vinicius Mussak\\Documents\\desk\\neo4j-community-3.4.8-windows.zip");
    res.status(200).json({
        ok: "OK"
    });
})

app.get('/async', (req, res) => {
    let arquivo = fs.readFile("C:\\Users\\Vinicius Mussak\\Documents\\desk\\neo4j-community-3.4.8-windows.zip", () => {
        res.status(200).json({
            ok: "OK"
        });
    });
})

app.get('/outro', (req, res) =>{
    res.status(200).json({
        ok: "OUTRO"
    });
})

app.listen(3000, () => {
    console.log('o/ servidor rodando na porta: 3000');
});