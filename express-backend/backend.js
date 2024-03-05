const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/createTables', (req, res) => {

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 