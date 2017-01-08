'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4790;
const IP = process.env.IP || "http://localhost";


app.use(express.static(path.join(__dirname)));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT);
console.log(`view app at ${IP}:${PORT}`);

exports = module.exports = app;