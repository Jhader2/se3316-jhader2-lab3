const fs = require("fs");
const { parse } = require("csv-parse");
const db = require("./db.js");

fs.createReadStream("./raw_albums.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    db.serialize(function () {
  
      /*
      db.run(`  CREATE TABLE raw_albums
      (
        album_id INT PRIMARY KEY,
        album_title VARCHAR(255),
        album_tracks INT,
        artist_name VARCHAR(255)
      )`)
      */
     /*
      db.run(
        `INSERT INTO raw_albums VALUES (?, ?, ?,?)`,
        [row[0], row[12], row[13],row[16]],
        function (error) {
          if (error) {
            return console.log(error.message);
          }
          console.log(`Inserted a row with the id: ${this.lastID}`);
        }
      );
      */
      /*
      db.all(`SELECT * FROM raw_albums`,[],(err,rows)=>{
        if (err) return console.error(err.message);
        rows.forEach(row=>{
            console.log(row);  
        })
        
    });
    */
    /*
    db.run(`CREATE TABLE raw_artists( artist_id INT PRIMARY KEY,
      artist_active_year_begin INT,
      artist_active_year_end INT,
      artist_associated_labels INT,
      artist_favorites INT,
      artist_name  VARCHAR(255))`)*/
      
    
    });
  });
