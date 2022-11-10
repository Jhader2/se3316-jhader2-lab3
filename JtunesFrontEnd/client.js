
const div = document.createElement("div");
const element = document.getElementById("inserts");
element.appendChild(div);



let click = 1;
function  getGenres(){
    let url = '/api/genres';
    let response = fetch(url);

    click += 1;

    if(click %2===0){
    fetch(url)
        .then(res => res.json())
        .then(genres =>{
            console.log(genres.data);
            let num = 1;

            while(num <= genres.data.length){
                const para = document.createElement("p");
                var text = document.createTextNode("\ngenre_id: " + genres.data[num].genre_id + " parent: " + genres.data[num].parent + " title: " + genres.data[num].title);
                para.appendChild(text);
                element.append(para);
                num++;
                
            }
        })
    }
    else {
        clearResults();
    }
}
function clearResults(){
    element.innerHTML = "";
}
function searchArtist() {
    let url = "/api/raw_artists/";
    const inputID = document.getElementById("searchArtist").value;
    console.log("searched num: "+ inputID);

    
    

    fetch(url+inputID)
    .then(res => res.json())
    .then((artist) => {
        const para = document.createElement("p");
                var text = document.createTextNode("\nartist_id: " + artist.data.artist_id + " artist_active_year_begin: " + 
                artist.data.artist_active_year_begin + " artist_active_year_end: " + artist.data.artist_active_year_end +
                " artist_associated_labels: " + artist.data.artist_associated_labels + " artist_favorites: " +
                artist.data.artist_favorites + " artist_name: " + artist.data.artist_name)
                para.appendChild(text);
                element.append(para);
        })
        
}
function searchTrackID() {
    let url = "/api/tracks/";
    const inputID = document.getElementById("searchTrack").value;
    

    
    

    fetch(url+inputID)
    .then(res => res.json())
    .then((track) => {
        console.log(track.data.track_id);
                    const para = document.createElement("p");
                    var text = document.createTextNode(
                        "track_id: " + track.data.track_id+
                        " album_id: " + track.data.album_id +
                        " album_title: " + track.data.album_title +
                        " artist_id: " + track.data.artist_id +
                        " artist_name: " + track.data.artist_name+
                        " tags: " + track.data.tags +
                        " track_date_created: " + track.data.track_date_created +
                        " track_date_recorded: " + track.data.track_date_recorded +
                        " track_duration: " + track.data.track_duration +
                        " track_genres: " + track.data.track_genres +
                        " track_number: " + track.data.track_number +
                        " track_title: " + track.data.track_title                 
                        );

                    para.appendChild(text);
                    element.append(para);
        })
    }
function searchAgg(){
    
    let url = "/api/tracks/name/";
    const inputID = document.getElementById("searchAgg").value;

    console.log(inputID);
    let inputLo = inputID.toLowerCase();

    fetch(url+inputLo)
    .then(resp => resp.json())
    .then((tracks) => {
        console.log(tracks.data);

                    const para = document.createElement("p");
                    var text = document.createTextNode(
                        tracks.data[0].track_id + ", " +
                        tracks.data[1].track_id + ", " +
                        tracks.data[2].track_id + ", " +
                        tracks.data[3].track_id + ", " +
                        tracks.data[4].track_id
                        );

                    para.appendChild(text);
                    element.append(para);
        
    })
}




/*
function searchArtistID(){
    let url = "/api/raw_artists";
    let inputID = document.getElementById("searchArtistID").value;
    
    fetch(url)
        .then(res => res.json())
        .then(artist =>{
            
            
            let num = 0;
            console.log(parseInt(artist.data[num].artist_id));
            console.log(inputID);

            while(num <= artist.data.length){
                if(parseInt(inputID) === artist.data[num].artist_id)
                {console.log("great success");
                const para = document.createElement("p");
                var text = document.createTextNode("\nartist_id: " + artist.data[num].artist_id + " artist_active_year_begin: " + 
                artist.data[num].artist_active_year_begin + " artist_active_year_end: " + artist.data[num].artist_active_year_end +
                " artist_associated_labels: " + artist.data[num].artist_associated_labels + " artist_favorites: " +
                artist.data[num].artist_favorites + " artist_name: " + artist.data[num].artist_name)
                para.appendChild(text);
                element.append(para);}
                num++;  
            }  })
}

function searchTrack(){
    let url = "/api/tracks";
    let inputID = document.getElementById("searchTrackID").value;
    
    

    fetch(url)
        .then(res => res.json())
        .then(track =>{
            let num = 0;
            console.log(parseInt(track.data[num].track_id));

            while(num<= track.data.length){
                if(parseInt(inputID)===parseInt(track.data[num].track_id)){
                    console.log("success");
                    
                    const para = document.createElement("p");
                    var text = document.createTextNode(
                        "album_id: " + track.data[num].album_id +
                        " album_title: " + track.data[num].album_title +
                        " artist_id: " + track.data[num].artist_id +
                        " artist_name: " + track.data[num].artist_name+
                        " tags: " + track.data[num].tags +
                        " track_date_created: " + track.data[num].track_date_created +
                        " track_date_recorded: " + track.data[num].track_date_recorded +
                        " track_duration: " + track.data[num].track_duration +
                        " track_genres: " + track.data[num].track_genres +
                        " track_number: " + track.data[num].track_number +
                        " track_title: " + track.data[num].track_title                 
                        );

                    para.appendChild(text);
                    element.append(para);

                }
                num++;
            }
            
          
            
  })
}
*/