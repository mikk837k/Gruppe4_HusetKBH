document.addEventListener("DOMContentLoaded", getJSON);

let myPosts;
let myFilmPosts;
let myTeaterPosts;
let eventet;
let modal = document.querySelector("#modal");
let destination = document.querySelector(".data-content");

let all = [];

async function getJSON() {



    let myJSON = await fetch("https://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/musikevents");
    myPosts = await myJSON.json();

    let myFilm = await fetch("https://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/filmevents");
    myFilmPosts = await myFilm.json();

    let myTeater = await fetch("https://designhagenow.dk/kea/huset-kbh/wordpress/wp-json/wp/v2/teaterevent");
    myTeaterPosts = await myTeater.json();



    myPosts.forEach(post => {
        all.push(post);
    })

    myFilmPosts.forEach(post => {
        all.push(post);
    })

    myTeaterPosts.forEach(post => {
        all.push(post);
    })



    console.log(all);
    showPosts();
}

function showPosts() {
    let myTemplate = document.querySelector("#data-template");

    console.log("showPosts kørt");

    all.forEach(post => {
        let klon = myTemplate.cloneNode(true).content;
        klon.querySelector("img").src = post.acf.billede;
        klon.querySelector("img").addEventListener("click", () => {
            visModal(post);
        });

        klon.querySelector("h2").innerHTML = post.acf.titel;
        klon.querySelector(".data-teasertekst").innerHTML = post.acf.teasertekst;
        klon.querySelector(".data-dato").innerHTML = "Dato: " + post.acf.dato;
        klon.querySelector(".data-tidspunkt").innerHTML = "Tidspunkt: " + post.acf.tidspunkt;

        klon.querySelector(".data-pris").innerHTML = "Pris: " + post.acf.pris + " kr";
        klon.querySelector(".data-button").innerHTML = post.acf.kobtilmeld;
        klon.querySelector(".data-venue").innerHTML = "Venue: " + post.acf.venue;
        //        klon.querySelector(".data-textarea").innerHTML = post.acf.tekst;
        destination.appendChild(klon);


    })


}

function visModal(eventet) {

    modal.classList.add("vis");
    modal.querySelector("img").src = eventet.acf.billede;


    modal.querySelector("h2").innerHTML = eventet.acf.titel;
    modal.querySelector(".data-tekst").innerHTML = eventet.acf.tekst;
    modal.querySelector(".data-dato").innerHTML = "Dato: " + eventet.acf.dato;

    modal.querySelector(".data-pris").innerHTML = "Pris: " + eventet.acf.pris + " kr";
    modal.querySelector(".data-venue").innerHTML = "Venue: " + eventet.acf.venue;

    modal.querySelector("div").addEventListener("click", hideModal);
}

function hideModal() {
    modal.classList.remove("vis");

}
