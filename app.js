const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnect, sequelize } = require('./config/mysql');
const routerApi = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;


app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});

dbConnect();

routerApi(app);






