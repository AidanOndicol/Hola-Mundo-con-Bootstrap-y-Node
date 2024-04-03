const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/convert', (req, res) => {
    const inputString = req.body.inputString;
    const conversion = convertToPLanguage(inputString);
    res.send('<h2>${conversion}</h2>');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor iniciado');
});

console.log('Servidor web iniciado')