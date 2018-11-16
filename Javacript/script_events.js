document.addEventListener("DOMContentLoaded", getJSON);

let myPosts;
let myFilmPosts;
let myTeaterPosts;
let eventet;
let modal = document.querySelector("#modal");
let closeModal = document.querySelector(".lukknap");
let destination = document.querySelector(".data-content");

let post;

let all = [];


let dest = document.querySelector(".data-content");

eventFilter = "alle";

document.querySelectorAll(".event-item").forEach(knap => {
    knap.addEventListener("click", filtrering)
});

function filtrering() {
    dest.textContent = "";

    // denne data-attribute  = et sted hvor man kan gemme værdier //
    eventFilter = this.getAttribute("data-kategori");
    showPosts();
}

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
    document.querySelector("h2").textContent = eventFilter;

    console.log("showPosts kørt");

    all.forEach(post => {
        if (post.acf.eventtype == eventFilter || eventFilter == "alle") {


            let klon = myTemplate.cloneNode(true).content;

            klon.querySelector("img").src = post.acf.billede;
            klon.querySelector("img").addEventListener("click", () => {
                visModal(post);
            });
            klon.querySelector("h2").innerHTML = post.acf.titel;
            klon.querySelector(".data-teasertekst").innerHTML = post.acf.teasertekst;
            klon.querySelector(".data-dato").innerHTML = "Dato: " + post.acf.dato;
            klon.querySelector(".data-pris").innerHTML = "Pris: " + post.acf.pris + " kr";
            klon.querySelector(".data-button").innerHTML = post.acf.kobtilmeld;

            //        klon.querySelector(".data-textarea").innerHTML = post.acf.tekst;
            destination.appendChild(klon);

        }
    })
    if (eventFilter == "alle") {
        document.querySelector(".filter_alle").classList.remove("red_underline");
        document.querySelector(".filter_film").classList.remove("red_underline");
        document.querySelector(".filter_musik").classList.remove("red_underline");
        document.querySelector(".filter_teater").classList.remove("red_underline");
        document.querySelector(".filter_alle").classList.add("red_underline");
    }
    if (eventFilter == "film") {
        document.querySelector(".filter_alle").classList.remove("red_underline");
        document.querySelector(".filter_film").classList.remove("red_underline");
        document.querySelector(".filter_musik").classList.remove("red_underline");
        document.querySelector(".filter_teater").classList.remove("red_underline");
        document.querySelector(".filter_film").classList.add("red_underline");
    }
    if (eventFilter == "musik") {
        document.querySelector(".filter_alle").classList.remove("red_underline");
        document.querySelector(".filter_film").classList.remove("red_underline");
        document.querySelector(".filter_musik").classList.remove("red_underline");
        document.querySelector(".filter_teater").classList.remove("red_underline");
        document.querySelector(".filter_musik").classList.add("red_underline");
    }
    if (eventFilter == "teater") {
        document.querySelector(".filter_alle").classList.remove("red_underline");
        document.querySelector(".filter_film").classList.remove("red_underline");
        document.querySelector(".filter_musik").classList.remove("red_underline");
        document.querySelector(".filter_teater").classList.remove("red_underline");
        document.querySelector(".filter_teater").classList.add("red_underline");
    }

}

function visModal(eventet) {

    modal.classList.add("vis");
    modal.querySelector("img").src = eventet.acf.billede;
    modal.querySelector("img").alt = eventet.title.rendered;

    modal.querySelector("h2").innerHTML = eventet.acf.titel;
    modal.querySelector(".data-tekst").innerHTML = eventet.acf.tekst;
    modal.querySelector(".data-dato").innerHTML = "Dato: " + eventet.acf.dato;
    modal.querySelector(".data-venue").innerHTML = "Venue: " + eventet.acf.venue;
    modal.querySelector(".data-pris").innerHTML = "Pris: " + eventet.acf.pris + " kr";
    modal.querySelector(".data-venue").innerHTML = "Venue: " + eventet.acf.venue;
    modal.querySelector(".data-tidspunkt").innerHTML = "Tidspunkt: " + eventet.acf.tidspunkt;
    modal.querySelector(".data-button").innerHTML = eventet.acf.kobtilmeld;
    //    modal.classList("div").addEventListener("click", hideModal);
    window.onclick = function (event) {
        if (event.target == closeModal) {
            modal.classList.remove("vis");
        }
    }
    if (window.innerWidth >= 650) {
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.classList.remove("vis");
            }
            if (event.target == closeModal) {
                modal.classList.remove("vis");
            }

        }
    }

}

//function hideModal() {
//    modal.classList.remove("vis");
//
//}
