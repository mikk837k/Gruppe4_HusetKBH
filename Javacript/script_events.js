document.addEventListener("DOMContentLoaded", getJSON);

let myPosts;
let destination = document.querySelector(".data-content");


async function getJSON() {

    let myJSON = await fetch("http://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/musikevents");
    myPosts = await myJSON.json();
    console.log(myPosts);
    showPosts();
}

function showPosts() {
    let myTemplate = document.querySelector("#data-template");

    console.log("showPosts kørt");

    myPosts.forEach(post => {
        let klon = myTemplate.cloneNode(true).content;
        klon.querySelector("img").src = post.acf.billede;
        klon.querySelector("h2").innerHTML = post.acf.titel;
        klon.querySelector(".data-teasertekst").innerHTML = post.acf.teasertekst;
        klon.querySelector(".data-dato").innerHTML = "Dato: " + post.acf.dato;
        klon.querySelector(".data-tidspunkt").innerHTML = "Tidspunkt: " + post.acf.tidspunkt;

        klon.querySelector(".data-pris").innerHTML = "Pris: " + post.acf.pris;
        klon.querySelector(".data-button").innerHTML = post.acf.kobtilmeld;
        klon.querySelector(".data-venue").innerHTML = "Venue: " + post.acf.venue;
        destination.appendChild(klon);

    })
}
