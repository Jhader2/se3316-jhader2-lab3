
const div = document.createElement("div");

const element = document.getElementById("inserts");
element.appendChild(div);

function searchArtistID(){
    let url = "/api/raw_artists";
    let inputID = document.getElementById("searchArtistID").value;
    
    
    fetch(url)
        .then(res => res.json())
        .then(artist =>{
            
            console.log(artist.data[inputID].artist_id);
            let num = 0;
            console.log(parseInt(artist.data[num].artist_id));
            console.log(inputID);

            while(num <= artist.data.length){
                if(inputID ===artist.data[num].artist_id)
                {console.log("great success");}
                num++;
            }


            /*
            const para = document.createElement("p");
            var text = document.createTextNode("\nartist_id: " + artist.data[inputID].artist_id);
            para.appendChild(text);
            element.append(para);
            */
            

                const para = document.createElement("p");
                var text = document.createTextNode("\nartist_id: " + artist.data[inputID].artist_id);
                para.appendChild(text);
                element.append(para);
                
              
            
})
}
/*for(i = 0;i<pokeArray.length;i++) {

    let poke = pokeArray[i].name.toLowerCase();
    //const isVisible = element.name.includes(value);
    if(poke.includes(input) && input != ""){
        div.appendChild(pokeArray[i].el.cloneNode(true));
    }
}*/


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