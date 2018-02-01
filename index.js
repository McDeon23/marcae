const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname))

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.get('/Aboutme', (req, res) => res.sendFile(__dirname + '/Aboutme.html'))

app.get('/Contact', (req, res) => res.sendFile(__dirname + '/Contact.html'))

app.listen(PORT, () => console.log(`Application LIVE on http://localhost${PORT}`))
