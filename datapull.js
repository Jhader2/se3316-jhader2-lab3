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
app.get("/api/raw_artists/:id", (req, res, next) => {
    var sql = "select * from raw_artists where artist_id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            //"message":"success",
            "data":row
        })
      });
});


app.get('/api/tracks',(req,res)=>{
  
    db.all(`SELECT * FROM raw_tracks`,[],(err,rows)=>{
        if (err) return console.error(err.message);
        return res.json({status:200,  data:rows, success:true});
        
    });
});
app.get("/api/tracks/:search", (req, res, next) => {
    var sql = "select * from raw_tracks where track_id = ?"
    var params = [req.params.search]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            //"message":"success",
            "data":row
        })
      });
});
/*
app.get('/api/tracks/:id',(req,res)=>{
    let query = 'SELECT * FROM raw_tracks'
    db.all(query,[],(err,rows)=>{
        if (err) return console.error(err.message);
        return res.json({status:200,  data:rows, success:true});
    });
});
*/
app.get('/api/albums',(req,res)=>{
  
    db.all(`SELECT * FROM raw_albums`,[],(err,rows)=>{
        if (err) return console.error(err.message);
        return res.json({status:200,  data:rows, success:true});
        
    });
});


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


app.get('/api/tracks/name/:id', (req, res) => {
    var sql = "select * from raw_tracks where album_title like '%' || ? || '%' Limit 5"
    var params = [req.params.id]
    db.all(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({"data":row})
      });
});

app.get('/api/raw_artists/name/:id', (req, res) => {
    var sql = "select * from raw_artists where artist_name like '%' || ? || '%'"
    var params = [req.params.id]
    db.all(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({"data":row})
      });
    });


/*
app.get("/api/tracks/:id", (req, res, next) => {
    var sql = "select * from raw_tracks where track_id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            //"message":"success",
            "data":row
        })
      });
});
*/

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