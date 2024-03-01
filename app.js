
const express = require('express');
const path = require('path');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
});

app.use('/', express.static(path.join(__dirname,'/')));

app.listen(port, () => {
    console.log(`Example app listening on port ${port} or http://127.0.0.1:3000`);
})
