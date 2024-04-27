const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT||3000;

app.get('/',(req,res) => {
    res.send(`hola mundo tonotos ${port}`);
    console.log(process.env.PORT);
})

app.listen (3000,()=>{
    console.info(`server is running on port 8000 ${port}`);
})