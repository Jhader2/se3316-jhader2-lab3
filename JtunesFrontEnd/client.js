
const div = document.createElement("div");

const element = document.getElementById("inserts");
element.appendChild(div);

function searchArtistID(){
    let url = "/api/raw_artists";
    let inputID = document.getElementById("searchArtistID").value;
    console.log(inputID);

    fetch(url)
        .then(res => res.json())
        .then(artist =>{
            console.log(artist.data[inputID]);
            let num = inputID;
            while(num <= artist.data.length){
                const para = document.createElement("p");

                var text = document.createTextNode("\nartist_id: " + artist.artist_ID[num]);

                element.append(para);
                num++;
                
            }
        })
}



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
        element.innerHTML = "";
    }
}