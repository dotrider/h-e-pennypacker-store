const express = require('express');
const app = express();
app.use(express.json());

const {getInventory} = require('./controller/controller')
const port = 4000;



app.get('/api/inventory', getInventory);


app.listen(port, () => console.log(`live on port${port}`))

