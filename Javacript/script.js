let myPosts;
//let myTemplate = document.querySelector("#data_template");
//Laver søgning i URL'en
let urlPrams = new URLSearchParams(window.location.search);
//Henter værdien "id" fra URL'en hvis den er tilstede
let id = urlPrams.get("id");
console.log(id);

document.addEventListener("DOMContentLoaded", getJSON);

//Henter data og sikre at det læses som JSON
async function getJSON() {

    let myJSON = await fetch("https://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/faciliteter");
    myPosts = await myJSON.json();

    console.log(myPosts);
    showFacility();
}


function showFacility() {
    let dest = document.querySelector(".singelview_data_content");
    myPosts.forEach(post => {
        console.log(post.id);
        if (post.id == id) {
            dest.querySelector("img").src = post.acf.billede;
            dest.querySelector("h2").innerHTML = post.acf.titel;
            dest.querySelector(".data_textarea").innerHTML = post.acf.tekst;
            dest.querySelector(".data_openinghours").innerHTML = post.acf.aabningstider;
            dest.querySelector(".data_url").href = post.acf.link_URL;
        }
        console.log("showPosts er kørt")
    })
}
