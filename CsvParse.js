const csvFilePath = './Exp 1 - Group 4, 5 and 6.CSV';
const csv = require('csvtojson');
const express = require('express');
const app = express();

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})

app.get('/', (req, res) => {
    csv().fromFile(csvFilePath).then((jsonObj)=>res.json(jsonObj.slice(8,jsonObj.length)))
    
})

app.listen(8080, ()=>{
    console.log('listening on port 8080')
})
