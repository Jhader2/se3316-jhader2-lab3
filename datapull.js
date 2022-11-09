const sqlite3 = require('sqlite3').verbose();

const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const url = require('url');

let db = new sqlite3.Database('./music.db', (err) => {
    if(err){
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite DB');
});



app.get('/api/raw_artists',(req,res)=>{
  
    db.all(`SELECT * FROM raw_artists`,[],(err,rows)=>{
        if (err) return console.error(err.message);
        return res.json({status:200,  data:rows, success:true});
        
    });
});

//URL for distinct artist IDs
app.get('/api/raw_artists/:id',(req,res)=>{
    artistSearch(req,res)
});


function artistSearch(req,res){
    let aQuery = `SELECT * FROM raw_artists WHERE ???`   
}




app.get('/api/genres',(req,res)=>{
  
    db.all(`SELECT * FROM genres`,[],(err,rows)=>{
        if (err) return console.error(err.message);
        return res.json({status:200,  data:rows, success:true});
        
    });
});

app.use('/', express.static('JtunesFrontEnd'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });





/*
db.close((err)=>{
    if(err){
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
*/
const port = process.env.PORT||3000;

app.listen(3000, () => console.log(`listening on ${port}`));