const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./music.db";


function connectToDatabase() {
    if (fs.existsSync(filepath)) {
      return new sqlite3.Database(filepath);
    } else {
      const db = new sqlite3.Database(filepath, (error) => {
        if (error) {
          return console.error(error.message);
        }
       // createAlbumTable(db);
      //  createArtistsTable(db);
       // createGenreTable(db);
       // createTracksTable(db);
        console.log("Connected to the database successfully");
      });
      return db;
    }
}


function  createGenreTable(db){
    db.exec(`
    CREATE TABLE genres
    (
        genre_id INT,
        parent INT,
        title  VARCHAR(255)
    )`
 );
}
/*
function createAlbumTable(db){
    db.exec(`
    CREATE TABLE raw_albums
    (
        album_id INT PRIMARY KEY
        album_title VARCHAR(255)
        album_tracks INT
        artist_name VARCHAR(255)
    )   
    `);
}
function createArtistsTable(db){
    db.exec(`
    CREATE TABLE raw_artists
    (
        artist_id INT PRIMARY KEY
        artist_active_year_begin INT
        artist_active_year_end INT
        artist_associated_labels INT
        artist_favorites INT
        artist_name  VARCHAR(255)
    )
    `);
}
function createTracksTable(db){
    db.exec(`
    CREATE TABLE raw_tracks
    (
        track_id INT PRIMARY KEY
        album_id INT
        album_title VARCHAR(255)
        artist_id INT
        artist_name VARCHAR(255)
        track_date_created VARCHAR(255)
        track_date_recorded VARCHAR(255)
        track_duration VARCHAR(255)
        track_genres VARCHAR(255)
        track_number INT
        track_title VARCHAR(255)
    )
    `)
}
*/
module.exports = connectToDatabase();
