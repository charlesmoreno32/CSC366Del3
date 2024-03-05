import express from "express";
import { addOwner } from "./models/owner-services.js";
const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/createTables', (req, res) => {
    /*addOwner({
        company_name: "Nike",
        company_ownings: 12.3
    }); 
    addOwner({
        company_name: "cal poly",
        company_ownings: 1.23
    });
    addOwner({
        company_name: "idk",
        company_ownings: 100
    });*/
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 