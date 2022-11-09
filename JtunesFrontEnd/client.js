
const div = document.createElement("div");

const element = document.getElementById("inserts");
element.appendChild(div);


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
            }  })}




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